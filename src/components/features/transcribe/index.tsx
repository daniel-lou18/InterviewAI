import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import Card from "@/components/ui/CompoundCard";
import { useEvaluate } from "@/hooks/useEvaluate";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import { createAnswerInput } from "@/utils/prompts";
import TranscriptionContent from "./TranscriptionContent";
import EvaluateButton from "./EvaluateButton";

export default function Transcription() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate, isPending, isSuccess } = useEvaluate();
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
          <CardHeader className="bg-blue-500 text-white flex flex-row justify-between items-center">
            <h2 className="text-lg font-semibold">Texte transcrit</h2>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </CardHeader>
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
            <EvaluateButton isPending={isPending} isSuccess={isSuccess} />
          </Card.Footer>
        </Card>
      </form>
    </motion.div>
  );
}
