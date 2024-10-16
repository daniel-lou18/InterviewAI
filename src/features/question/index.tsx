import Card from "@/components/ui/CompoundCard";
import Text from "@/components/ui/Text";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { useRecord } from "@/hooks/useRecord";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import RecordButton from "./RecordButton";

export default function Question() {
  const { currentQuestion } = useInterview();
  const {
    isRecording,
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    audioUrl,
  } = useRecord();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="col-span-2"
    >
      <Card>
        <Card.Header className="bg-purple-700">Question</Card.Header>
        <Card.Content className="p-4">
          <Text className="text-xl font-bold">
            {currentQuestion?.question ||
              "Erreur lors de la récupération des questions"}
          </Text>
          <Container className="flex justify-between">
            <Text className="text-primary text-sm">
              {'Appuyez sur "Enregistrer" pour répondre à la question.'}
            </Text>
          </Container>
          <Container className="flex justify-center my-10">
            <motion.div
              animate={{
                scale: isRecording ? [1, 1.2, 1] : 1,
                opacity: isRecording ? 1 : 0.5,
              }}
              transition={{
                duration: 1,
                repeat: isRecording ? Infinity : 0,
                repeatType: "loop",
              }}
            >
              <Mic
                className={`h-12 w-12 ${
                  isRecording ? "text-red-500" : "text-gray-400"
                }`}
              />
            </motion.div>
          </Container>
          <Container className="flex items-center justify-between">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Icon iconName="RotateCcw" />
              Réinitialiser
            </Button>
            <RecordButton
              isRecording={isRecording}
              handleStartRecording={handleStartRecording}
              handleStopRecording={handleStopRecording}
            />
            <Button
              size="sm"
              disabled={!audioUrl}
              onClick={handlePlayAudio}
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Icon iconName="Volume2" />
              Écouter
            </Button>
          </Container>
        </Card.Content>
      </Card>
    </motion.div>
  );
}
