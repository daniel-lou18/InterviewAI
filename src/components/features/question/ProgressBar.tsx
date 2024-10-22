import { Button } from "../../ui/button";
import Container from "../../ui/Container";
import Icon from "../../ui/Icon";
import { Progress } from "../../ui/progress";
import Text from "../../ui/Text";
import { useInterview } from "@/hooks/useInterview";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function ProgressBar() {
  const { currentQuestionIndex, toPrevQuestion, toNextQuestion } =
    useInterview();
  const { score, totalNumberPoints, totalNumberQuestions, progress } =
    useAnalytics();

  return (
    <Container className="lg:col-span-2 w-full flex justify-between items-center mb-6">
      <Button
        size="icon"
        disabled={currentQuestionIndex === 0}
        className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        onClick={toPrevQuestion}
      >
        <Icon iconName="ArrowBigLeft" className="m-0 h-5 w-5" />
      </Button>
      <Container className="w-1/2">
        <Progress className="w-full h-4 bg-purple-200" value={progress} />
        <Container className="flex justify-between text-sm font-semibold">
          <Text className="mb-0">{`${
            currentQuestionIndex + 1
          } / ${totalNumberQuestions} questions`}</Text>
          <Text className="mb-0">{`${score} / ${totalNumberPoints} points`}</Text>
        </Container>
      </Container>
      <Button
        size="icon"
        disabled={currentQuestionIndex === totalNumberQuestions - 1}
        className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        onClick={toNextQuestion}
      >
        <Icon iconName="ArrowBigRight" className="m-0 h-5 w-5" />
      </Button>
    </Container>
  );
}
