import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useQuestions } from "./useQuestions";

export function useAnalytics() {
  const { questions } = useQuestions();
  const { currentQuestionId, questionOrder, score } = useSelector(
    (state: RootState) => state.interview
  );

  const currentQuestionIndex = questionOrder.indexOf(currentQuestionId);
  const totalNumberQuestions = questions?.length || 0;
  const totalNumberPoints = totalNumberQuestions * 10;
  const progress = ((currentQuestionIndex + 1) / totalNumberQuestions) * 100;

  return { totalNumberQuestions, totalNumberPoints, score, progress };
}
