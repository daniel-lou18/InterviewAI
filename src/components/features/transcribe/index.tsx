import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import Card from "@/components/ui/CompoundCard";
import { useEvaluate } from "@/hooks/useEvaluate";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import { createAnswerInput } from "@/utils/prompts";
import TranscriptionContent from "./TranscriptionContent";
import EvaluateButton from "./EvaluateButton";
import ExpandButton from "@/components/ui/ExpandButton";

export default function Transcription() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate, isPending } = useEvaluate();
  const { transcription, currentQuestion } = useInterview();
  const text = transcription ? transcription.text : "";

  function handleSubmitTranscription(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentQuestion) return;
    const inputs = createAnswerInput(text, currentQuestion);
    mutate(inputs);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <form onSubmit={handleSubmitTranscription}>
        <Card>
          <Card.Header
            className="bg-blue-500 text-white flex flex-row justify-between items-center"
            actions={
              <ExpandButton
                disabled={!text}
                onClick={() => setIsExpanded(!isExpanded)}
                isExpanded={isExpanded}
              />
            }
          >
            Texte transcrit
          </Card.Header>
          <Card.Content className="pt-6">
            <TranscriptionContent isExpanded={isExpanded} />
          </Card.Content>
          <Card.Footer className="justify-between">
            <Button
              type="button"
              size="sm"
              disabled={!text}
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            >
              <Icon iconName="Pen" />
              Éditer
            </Button>
            <EvaluateButton isPending={isPending} />
          </Card.Footer>
        </Card>
      </form>
    </motion.div>
  );
}
