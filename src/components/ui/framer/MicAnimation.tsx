import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type MicAnimationProps = PropsWithChildren<{ isRecording: boolean }>;

export default function MicAnimation({
  children,
  isRecording,
}: MicAnimationProps) {
  return (
    <motion.div
      animate={{
        scale: isRecording ? [1, 1.2, 1] : 1,
        opacity: isRecording ? 1 : 0.5,
      }}
      transition={{
        duration: 1,
        repeat: isRecording ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
}
