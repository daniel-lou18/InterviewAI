import Card from "@/components/ui/CompoundCard";
import Text from "@/components/ui/Text";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Play, Pause, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import useRecord from "@/hooks/useRecord";
import Container from "@/components/ui/Container";

export default function Question({ children }: PropsWithChildren) {
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
          <Text className="text-lg font-bold">{children}</Text>
          <Text className="text-primary mt-2 text-sm">
            {'Appuyez sur "Démarrer" pour commencer l\'entretien.'}
          </Text>
          <Container className="flex items-center justify-between mb-4">
            <Text
              className={`text-sm ${
                isRecording ? "text-red-600 font-semibold" : "text-gray-600"
              }`}
            >
              {isRecording
                ? "Enregistrement en cours..."
                : "Prêt à enregistrer"}
            </Text>
            <Button
              onClick={isRecording ? handleStopRecording : handleStartRecording}
              className={`transition-all duration-300 ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isRecording ? (
                <Pause className="mr-2 h-4 w-4" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {isRecording ? "Arrêter" : "Démarrer"}
            </Button>
            <Button
              disabled={!audioUrl}
              onClick={handlePlayAudio}
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Volume2 className="mr-2 h-4 w-4" />
              Écouter
            </Button>
          </Container>
          <Container className="flex justify-center pt-2 mb-4">
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
        </Card.Content>
      </Card>
    </motion.div>
  );
}
