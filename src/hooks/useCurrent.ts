import { RootState } from "@/store/store";
import { Question } from "@/types/interview";
import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export function useCurrent() {
  const interview = useSelector((state: RootState) => state.interview);
  const { currentQuestionIndex, transcriptions } = interview;
  const queryClient = useQueryClient();
  const questions = queryClient.getQueryData<Question[]>(["questions"]);
  const question = questions?.length ? questions[currentQuestionIndex] : null;

  const transcription = question ? transcriptions[question.id] : null;
  const evaluation = question ? interview.evaluations[question.id] : null;

  return { question, transcription, evaluation };
}
