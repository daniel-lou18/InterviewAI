import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

function PageTitle({ children }: PropsWithChildren) {
  return (
    <motion.h1
      className="text-3xl font-bold mb-6 text-center text-purple-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
}

export default PageTitle;
