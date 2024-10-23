import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";

export default function ResetButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex justify-center lg:col-span-2"
    >
      <Button
        size="sm"
        variant="outline"
        className="bg-white hover:bg-gray-100 text-gray-800 transition-colors duration-300"
      >
        <RotateCcw className="mr-2 h-5 w-5" />
        Réinitialiser
      </Button>
    </motion.div>
  );
}
