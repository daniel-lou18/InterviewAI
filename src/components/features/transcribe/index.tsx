import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import Card from "@/components/ui/CompoundCard";
import { useEvaluate } from "@/hooks/useEvaluate";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import { createAnswerInput } from "@/utils/prompts";
import TranscriptionContent from "./TranscriptionContent";
import EvaluateButton from "./EvaluateButton";
import ExpandButton from "@/components/ui/ExpandButton";
import CardTransition from "@/components/ui/framer/CardTransition";
import { LayoutTable, View } from "@/types/components";
import { ViewOptions } from "@/components/ui/viewSwitcher";

const layoutClasses: LayoutTable<ViewOptions> = {
  vertical: "col-span-1",
  horizontal: "col-span-1",
  stacked: "col-span-2",
};

export default function Transcription({ view }: View) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate, isPending } = useEvaluate();
  const { transcription, currentQuestion, currentQuestionId } = useInterview();
  const text = transcription ? transcription.text : "";

  function handleSubmitTranscription(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentQuestion) return;
    const inputs = createAnswerInput(text, currentQuestion);
    mutate(inputs);
  }

  return (
    <CardTransition cardKey={currentQuestionId} className={layoutClasses[view]}>
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
    </CardTransition>
  );
}
