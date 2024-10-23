import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{
  cardKey: Key;
  className?: string;
}>;

export default function CardTransition({
  children,
  cardKey,
  className,
}: CardTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={cardKey}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
