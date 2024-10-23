import { useInterview } from "@/hooks/useInterview";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{
  cardKey: Key;
  className?: string;
}>;

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
};

export default function CardTransition({
  children,
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
        transition={{
          x: { duration: 0.3, delay: 0.05 },
          opacity: { duration: 0.2 },
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
