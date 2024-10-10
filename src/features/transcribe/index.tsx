import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Card from "@/components/ui/CompoundCard";
import Loader from "@/components/ui/Loader";
import Text from "@/components/ui/Text";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useIsMutating } from "@tanstack/react-query";
import useEvaluate from "@/hooks/useEvaluate";
import Icon from "@/components/ui/Icon";

export default function Transcription() {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = useSelector((state: RootState) => state.transcription.text);
  const isLoading = useIsMutating({ mutationKey: ["transcription"] });
  const { mutate } = useEvaluate();

  let content: ReactNode;

  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && !text) {
    content = (
      <Text className="text-sm text-gray-500">
        La transcription de votre réponse sera affichée ici
      </Text>
    );
  } else {
    content = (
      <Text
        className={`transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
        }`}
      >
        {text}
      </Text>
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
          <h2 className="text-lg font-semibold">Texte transcrit</h2>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CardHeader>
        <Card.Content className="pt-6">{content}</Card.Content>
        <Card.Footer className="justify-between">
          <Button
            size="sm"
            disabled={!text}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Icon iconName="Pen" />
            Éditer
          </Button>
          <Button
            size="sm"
            onClick={() => mutate(text)}
            disabled={!text}
            className=" bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Icon iconName="Check" />
            Valider
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}
