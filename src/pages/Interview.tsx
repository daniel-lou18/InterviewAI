import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Transcription from "../features/transcribe";
import PageTitle from "../components/ui/PageTitle";
import Question from "../features/question";
import Container from "../components/ui/Container";
import Evaluation from "@/features/evaluate";

const Interview = () => {
  return (
    <Container className="w-screen min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <Container className="container mx-auto px-4 py-8 min-h-screen lg:grid grid-cols-2 lg:max-w-[1024px] gap-x-6">
        <PageTitle className="lg:col-span-2">InterviewAI 🤖</PageTitle>
        <Question>
          Citez au moins trois raisons distinctes pour lesquelles un composant
          React pourrait être re-rendu.
        </Question>
        <Transcription />
        <Evaluation />

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
