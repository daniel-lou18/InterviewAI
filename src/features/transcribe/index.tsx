import { Check, ChevronDown, ChevronUp, Loader2, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function Transcription({
  children,
  isLoading,
}: TranscriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  let content: ReactNode;

  if (isLoading) {
    content = (
      <div className="w-full flex justify-center">
        <Loader2 className="animate-spin size-12" />
      </div>
    );
  } else if (!isLoading && !children) {
    content = (
      <p className="text-sm text-gray-500">
        La transcription de votre réponse sera affichée ici
      </p>
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
        <CardHeader className="bg-blue-500 text-white flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Texte transcrit</h2>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CardHeader>
        <CardContent className="pt-6">{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Button
            disabled={!children}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Pen className="mr-2 h-4 w-4" />
            Éditer la transcription
          </Button>
          <Button
            disabled={!children}
            className=" bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            <Check className="mr-2 h-4 w-4" />
            Valider la réponse
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
