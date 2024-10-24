import Card from "@/components/ui/CompoundCard";
import Text from "@/components/ui/Text";
import { Mic } from "lucide-react";
import { useRecord } from "@/hooks/useRecord";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { useInterview } from "@/hooks/useInterview";
import RecordButton from "./RecordButton";
import CardTransition from "@/components/ui/framer/CardTransition";
import MicAnimation from "@/components/ui/framer/MicAnimation";

export default function Question() {
  const { currentQuestion, currentQuestionId } = useInterview();
  const {
    isRecording,
    handleStartRecording,
    handleStopRecording,
    handlePlayAudio,
    audioUrl,
  } = useRecord();

  return (
    <CardTransition cardKey={currentQuestionId} className="col-span-2">
      <Card>
        <Card.Header className="bg-purple-700">Question</Card.Header>
        <Card.Content className="p-4">
          <Text className="md:text-xl font-bold">
            {currentQuestion?.question ||
              "Erreur lors de la récupération des questions"}
          </Text>
          <Container className="flex justify-between">
            <Text className="text-primary text-sm">
              {'Appuyez sur "Enregistrer" pour répondre à la question.'}
            </Text>
          </Container>
          <Container className="flex justify-center my-10">
            <MicAnimation isRecording={isRecording}>
              <Mic
                className={`h-12 w-12 ${
                  isRecording ? "text-red-500" : "text-gray-400"
                }`}
              />
            </MicAnimation>
          </Container>
          <Container className="flex items-center justify-between">
            <Button
              size="sm"
              className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Icon iconName="RotateCcw" />
              Réinitialiser
            </Button>
            <RecordButton
              isRecording={isRecording}
              handleStartRecording={handleStartRecording}
              handleStopRecording={handleStopRecording}
            />
            <Button
              size="sm"
              disabled={!audioUrl}
              onClick={handlePlayAudio}
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            >
              <Icon iconName="Volume2" />
              Écouter
            </Button>
          </Container>
        </Card.Content>
      </Card>
    </CardTransition>
  );
}
