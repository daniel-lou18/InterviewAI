import { Play, Pause, Check, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import useRecord from "@/hooks/useRecord";

type AnswerProps = Omit<
  ReturnType<typeof useRecord>,
  "text" | "error" | "isLoading"
>;

export default function Answer({
  isRecording,
  handleStopRecording,
  handleStartRecording,
  audioUrl,
  handlePlayAudio,
}: AnswerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="mb-6 shadow-lg overflow-hidden">
        <CardHeader className="bg-blue-700 text-white">
          <h2 className="text-lg font-semibold">Enregistrer votre réponse</h2>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <p
              className={`text-sm ${
                isRecording ? "text-red-600 font-semibold" : "text-gray-600"
              }`}
            >
              {isRecording
                ? "Enregistrement en cours..."
                : "Prêt à enregistrer"}
            </p>
            <Button
              onClick={isRecording ? handleStopRecording : handleStartRecording}
              className={`transition-all duration-300 ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isRecording ? (
                <Pause className="mr-2 h-5 w-5" />
              ) : (
                <Play className="mr-2 h-5 w-5" />
              )}
              {isRecording ? "Arrêter" : "Démarrer"}
            </Button>
            <Button
              disabled={!audioUrl}
              onClick={handlePlayAudio}
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Volume2 className="mr-2 h-5 w-5" />
              Écouter
            </Button>
          </div>
          <div className="flex justify-center mb-4">
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
          </div>
          <p className="whitespace-pre-wrap text-lg"></p>
        </CardContent>
        <CardFooter>
          <Button
            disabled={false}
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Check className="mr-2 h-5 w-5" />
            Valider la réponse
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
