import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Transcription from "../components/features/transcribe";
import PageTitle from "../components/ui/PageTitle";
import Question from "../components/features/question";
import Container from "../components/ui/Container";
import Evaluation from "@/components/features/evaluate";
import ProgressBar from "@/components/features/question/ProgressBar";

const Interview = () => {
  return (
    <Container className="w-screen min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <Container className="container mx-auto px-4 py-8 min-h-screen lg:grid grid-cols-2 lg:max-w-[1024px] gap-x-6">
        <PageTitle>Interview AI 🤖</PageTitle>
        <ProgressBar />
        <Question />
        <Transcription />
        <Evaluation />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center lg:col-span-2"
        >
          <Button
            size="sm"
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
