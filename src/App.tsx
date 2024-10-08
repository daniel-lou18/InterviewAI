import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Answer from "./features/answer";
import Transcription from "./features/transcription";
import PageTitle from "./components/ui/PageTitle";
import Question from "./features/question";
import useRecord from "./hooks/useRecord";

const InterviewPracticeApp = () => {
  const {
    isRecording,
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    audioUrl,
    text,
    isLoading,
    error,
  } = useRecord();

  const recordingProps = {
    isRecording,
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    audioUrl,
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="container max-w-[600px] mx-auto px-4 py-8 min-h-screen">
        <PageTitle>InterviewAI 🤖</PageTitle>
        <Question>
          Citez au moins trois raisons distinctes pour lesquelles un composant
          React pourrait être re-rendu.
        </Question>
        <Answer {...recordingProps} />
        <Transcription isLoading={isLoading} error={error}>
          {text}
        </Transcription>

        {/* <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-6 shadow-lg">
              <CardHeader className="bg-green-700 text-white">
                <h2 className="text-xl font-semibold">Feedback</h2>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-lg">{feedback}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-800 transition-colors duration-300"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Réinitialiser
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewPracticeApp;
