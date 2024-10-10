import { ChevronDown, ChevronUp, Forward } from "lucide-react";
import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { parseEvaluation } from "@/utils/helpers";
import TextTitle from "@/components/ui/TextTitle";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Loader from "@/components/ui/Loader";
import Card from "@/components/ui/CompoundCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useIsMutating } from "@tanstack/react-query";

export default function Evaluation() {
  const [isExpanded, setIsExpanded] = useState(true);
  const text = useSelector((state: RootState) => state.evaluation.text);
  const { score, motivation, feedback } = parseEvaluation(text);
  const isLoading = useIsMutating({ mutationKey: ["evaluation"] });

  let content: ReactNode;

  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && !text) {
    content = (
      <Text className="text-sm text-gray-500">
        L'evaluation de votre transcription sera affichée ici
      </Text>
    );
  } else {
    content = (
      <Container
        className={`transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
        }`}
      >
        <TextTitle>{`Note globale : ${score}`}</TextTitle>
        <Text>{motivation}</Text>
        <TextTitle>Conseils</TextTitle>
        <Text>{feedback}</Text>
      </Container>
    );
  }

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
        <Card.Content className="pt-6">{content}</Card.Content>
        <Card.Footer className="justify-end">
          <Button
            disabled={!text}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Forward className="mr-2 h-4 w-4" />
            Réévaluer
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}
