import { getInterviewQuestions } from "@/services/QuestionsService";
import { Question } from "@/types/interview";
import { useQuery } from "@tanstack/react-query";

export function useQuestions() {
  const {
    data: questions,
    isLoading,
    error,
  } = useQuery<Question[], Error>({
    queryKey: ["questions"],
    queryFn: getInterviewQuestions,
  });

  return { questions, isLoading, error };
}
