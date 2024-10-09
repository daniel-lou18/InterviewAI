import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { PropsWithChildren, ReactNode, useState } from "react";

type TranscriptionProps = {
  isLoading: boolean;
  error: string;
} & PropsWithChildren;

export default function Evaluation({
  children,
  isLoading,
}: TranscriptionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  let content: ReactNode;

  if (isLoading) {
    content = (
      <div className="w-full flex justify-center">
        <Loader2 className="animate-spin size-12" />
      </div>
    );
  } else {
    content = (
      <p
        className={`transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
        }`}
      >
        {children}
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="mb-6 shadow-lg overflow-hidden">
        <CardHeader className="bg-blue-500 text-white flex flex-row justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Évaluation</h2>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CardHeader>
        <CardContent className="p-4">{content}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
}
