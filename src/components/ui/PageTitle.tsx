import { cn } from "@/lib/utils";
import { PropsWithChildrenClassName } from "@/types/components";
import { motion } from "framer-motion";

function PageTitle({ children, className }: PropsWithChildrenClassName) {
  return (
    <motion.h1
      className={cn(
        "text-3xl font-bold mb-8 text-center text-purple-800 lg:col-span-2",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
}

export default PageTitle;
