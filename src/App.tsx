import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Answer from "./features/answer";

const InterviewPracticeApp = () => {
  return (
    <div className="container w-screen h-screen bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen">
      <div className="container max-w-[600px] mx-auto p-4 min-h-screen">
        <motion.h1
          className="text-3xl font-bold mb-6 text-center text-purple-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          React/JavaScript Interview Practice
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-6 shadow-lg">
            <CardHeader className="bg-purple-700 text-white">
              <h2 className="text-xl font-semibold">Question</h2>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-lg">
                {'Press "Start" to begin the interview question.'}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Answer />

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
            Reset
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewPracticeApp;
