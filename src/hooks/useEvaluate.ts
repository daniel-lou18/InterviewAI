import { evaluateResponse } from "@/services/EvalResponseService";
import { createAnswerInput } from "@/utils/prompts";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useCurrent } from "./useCurrent";
import { Evaluation } from "@/types/interview";
import { saveEvaluation } from "@/slices/interviewSlice";

export function useEvaluate() {
  const dispatch = useDispatch();
  const { question: currentQuestion } = useCurrent();

  const { mutate } = useMutation({
    mutationFn: (userResponse: string) => {
      const inputs = createAnswerInput(userResponse);
      return evaluateResponse(inputs);
    },
    mutationKey: ["evaluation"],
    onSuccess: (data) => {
      if (data && "text" in data && currentQuestion) {
        const evaluation: Evaluation = {
          id: Date.now(),
          questionId: currentQuestion.id,
          text: data.text,
        };
        dispatch(saveEvaluation(evaluation));
      }
    },
  });

  return { mutate };
}
