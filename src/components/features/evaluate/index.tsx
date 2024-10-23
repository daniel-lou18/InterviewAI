import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/CompoundCard";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import EvaluationContent from "./EvaluationContent";
import ExpandButton from "@/components/ui/ExpandButton";

export default function Evaluation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { evaluation } = useInterview();
  const text = evaluation ? evaluation.text : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
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
          {/* <Button
            size="sm"
            disabled={!text}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Icon iconName="ArrowBigRight" />
            Suivant
          </Button> */}
        </Card.Footer>
      </Card>
    </motion.div>
  );
}
