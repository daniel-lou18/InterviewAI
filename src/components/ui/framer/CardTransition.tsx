import { useInterview } from "@/hooks/useInterview";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren;

export default function CardTransition({ children }: CardTransitionProps) {
  const { currentQuestionId } = useInterview();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`question-${currentQuestionId}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
