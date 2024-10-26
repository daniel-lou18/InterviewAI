import { useInterview } from "@/hooks/useInterview";
import { ViewOptions } from "@/slices/layoutSlice";
import { LayoutTable } from "@/types/components";
import { motion, AnimatePresence } from "framer-motion";
import { Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{
  view: ViewOptions;
  cardKey: Key;
  className?: string;
  layoutClasses: LayoutTable<ViewOptions>;
}>;

const GridCardTransition = ({
  view,
  children,
  layoutClasses,
  cardKey,
}: CardTransitionProps) => {
  const { direction } = useInterview();

  const directionVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <motion.div
        key={cardKey}
        className={layoutClasses[view]}
        custom={direction}
        variants={directionVariants}
        initial="enter"
        animate="center"
        exit="exit"
        layout="position"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default GridCardTransition;
