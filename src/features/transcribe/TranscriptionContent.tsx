import Text from "@/components/ui/Text";
import { useInterview } from "@/hooks/useInterview";

type TranscriptionContentProps = {
  isExpanded: boolean;
};

export default function TranscriptionContent({
  isExpanded,
}: TranscriptionContentProps) {
  const { transcription } = useInterview();
  const text = transcription ? transcription.text : "";

  if (!text) {
    return (
      <Text className="text-sm text-gray-500">
        La transcription de votre réponse sera affichée ici
      </Text>
    );
  }

  return (
    <Text
      className={`transition-all duration-300 ${
        isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
      }`}
    >
      {text}
    </Text>
  );
}
