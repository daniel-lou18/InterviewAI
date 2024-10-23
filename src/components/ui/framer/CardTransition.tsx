import { AnimatePresence, motion } from "framer-motion";
import { Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{ cardKey: Key }>;

export default function CardTransition({
  children,
  cardKey,
}: CardTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={cardKey}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
