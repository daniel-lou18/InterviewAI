import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Question({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="mb-6 shadow-lg overflow-hidden">
        <CardHeader className="bg-purple-700 text-white">
          <h2 className="text-lg font-semibold">Question</h2>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-lg font-bold">{children}</p>
          <p className="text-primary mt-2 text-sm">
            {'Appuyez sur "Démarrer" pour commencer l\'entretien.'}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
