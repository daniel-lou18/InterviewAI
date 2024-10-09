import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Answer from "../features/answer";
import Transcription from "../features/transcribe";
import PageTitle from "../components/ui/PageTitle";
import Question from "../features/question";
import useRecord from "../hooks/useRecord";
import useEvaluate from "../hooks/useEvaluate";
import Evaluation from "../features/evaluate";
import Container from "../components/ui/Container";

const Interview = () => {
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

  const {
    feedback,
    isLoading: isLoadingFeedback,
    error: feedbackError,
  } = useEvaluate(text);

  const recordingProps = {
    isRecording,
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    audioUrl,
  };

  return (
    <Container className="w-screen min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <Container className="container mx-auto px-4 py-8 min-h-screen lg:grid grid-cols-2 lg:max-w-[90%] gap-x-6">
        <PageTitle className="lg:col-span-2">InterviewAI 🤖</PageTitle>
        <Question>
          Citez au moins trois raisons distinctes pour lesquelles un composant
          React pourrait être re-rendu.
        </Question>
        <Transcription isLoading={isLoading} error={error}>
          {text}
        </Transcription>
        <Answer {...recordingProps} />
        <Evaluation isLoading={isLoadingFeedback} error={feedbackError}>
          {feedback}
        </Evaluation>

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
          className="flex justify-center lg:col-span-2"
        >
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-800 transition-colors duration-300"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Réinitialiser
          </Button>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Interview;
