import TextTitle from "@/components/ui/TextTitle";
import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";
import { parseEvaluation } from "@/utils/helpers";
import { useInterview } from "@/hooks/useInterview";

type EvaluationContentProps = {
  isExpanded: boolean;
};

export default function EvaluationContent({
  isExpanded,
}: EvaluationContentProps) {
  const { evaluation } = useInterview();
  const text = evaluation ? evaluation.text : "";
  const { score, motivation, feedback } = parseEvaluation(text);

  if (!text) {
    return (
      <Text className="text-sm italic text-gray-500">
        L'évaluation de votre transcription sera affichée ici
      </Text>
    );
  }
  {
    return (
      <Container
        className={`text-sm transition-all duration-300 ${
          isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
        }`}
      >
        <TextTitle>{`Note globale : ${score}`}</TextTitle>
        <Text>{motivation}</Text>
        <TextTitle>Conseils</TextTitle>
        <Text>{feedback}</Text>
      </Container>
    );
  }
}
