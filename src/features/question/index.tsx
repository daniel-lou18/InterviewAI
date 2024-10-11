import Card from "@/components/ui/CompoundCard";
import Text from "@/components/ui/Text";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRecord } from "@/hooks/useRecord";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { useCurrent } from "@/hooks/useCurrent";

export default function Question() {
  const { currentQuestion } = useCurrent();
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
              {'Appuyez sur "Démarrer" pour commencer l\'entretien.'}
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
            <Button
              size="sm"
              onClick={isRecording ? handleStopRecording : handleStartRecording}
              className={`transition-all duration-300 ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isRecording ? (
                <Icon iconName="Pause" />
              ) : (
                <Icon iconName="Play" />
              )}
              {isRecording ? "Arrêter" : "Démarrer"}
            </Button>
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
