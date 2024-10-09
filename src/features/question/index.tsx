import Card from "@/components/ui/CompoundCard";
import Text from "@/components/ui/Text";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Question({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <Card.Header className="bg-purple-700">Question</Card.Header>
        <Card.Content className="p-4">
          <Text className="text-lg font-bold">{children}</Text>
          <Text className="text-primary mt-2 text-sm">
            {'Appuyez sur "Démarrer" pour commencer l\'entretien.'}
          </Text>
        </Card.Content>
      </Card>
    </motion.div>
  );
}
