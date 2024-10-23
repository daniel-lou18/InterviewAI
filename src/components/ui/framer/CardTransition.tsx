import { useInterview } from "@/hooks/useInterview";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{
  cardKey: Key;
  delay?: number;
  className?: string;
}>;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function CardTransition({
  children,
  delay = 0,
  cardKey,
  className,
}: CardTransitionProps) {
  const { direction } = useInterview();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={cardKey}
        variants={cardVariants}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.2,
          delay,
          ease: "easeInOut",
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
