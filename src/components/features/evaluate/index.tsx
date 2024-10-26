import { useState } from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/CompoundCard";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import EvaluationContent from "./EvaluationContent";
import ExpandButton from "@/components/ui/ExpandButton";
import CardTransition from "@/components/ui/framer/CardTransition";
import { LayoutTable, View } from "@/types/components";
import { ViewOptions } from "@/slices/layoutSlice";

const layoutClasses: LayoutTable<ViewOptions> = {
  vertical: "col-span-1",
  horizontal: "col-span-1",
  stacked: "col-span-2",
};

export default function Evaluation({ view }: View) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { evaluation, currentQuestionId } = useInterview();
  const text = evaluation ? evaluation.text : "";

  return (
    <CardTransition cardKey={currentQuestionId} className={layoutClasses[view]}>
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
          Évaluation
        </Card.Header>
        <Card.Content className="pt-6">
          <EvaluationContent isExpanded={isExpanded} />
        </Card.Content>
        <Card.Footer className="justify-start">
          <Button
            size="sm"
            disabled={!text}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Icon iconName="RotateCw" />
            Réévaluer
          </Button>
        </Card.Footer>
      </Card>
    </CardTransition>
  );
}
