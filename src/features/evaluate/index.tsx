import { ChevronDown, ChevronUp } from "lucide-react";
import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/CompoundCard";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import EvaluationContent from "./EvaluationContent";

export default function Evaluation() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { evaluation } = useInterview();
  const text = evaluation ? evaluation.text : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader className="bg-blue-500 text-white flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Évaluation</h2>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CardHeader>
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
