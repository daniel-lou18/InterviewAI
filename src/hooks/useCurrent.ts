import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useQuestions } from "./useQuestions";

export function useCurrent() {
  const interview = useSelector((state: RootState) => state.interview);
  const { currentQuestionIndex, transcriptions, evaluations, score } =
    interview;
  const { data } = useQuestions();

  const currentQuestion = data?.[currentQuestionIndex];
  const transcription = currentQuestion
    ? transcriptions[currentQuestion.id]
    : null;
  const evaluation = currentQuestion ? evaluations[currentQuestion.id] : null;

  const totalNumberQuestions = data?.length || 0;
  const totalNumberPoints = totalNumberQuestions * 10;
  const progress = ((currentQuestionIndex + 1) / totalNumberQuestions) * 100;

  return {
    currentQuestion,
    currentQuestionIndex,
    transcription,
    evaluation,
    totalNumberQuestions,
    totalNumberPoints,
    score,
    progress,
  };
}
