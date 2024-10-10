import { evaluateResponse } from "@/services/EvalResponseService";
import { setEvaluation } from "@/slices/evaluationSlice";
import { createAnswerInput } from "@/utils/prompts";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export default function useEvaluate() {
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: (userResponse: string) => {
      const inputs = createAnswerInput(userResponse);
      return evaluateResponse(inputs);
    },
    mutationKey: ["evaluation"],
    onSuccess: (data) => {
      if (data && "text" in data) {
        dispatch(setEvaluation(data.text));
      }
    },
  });

  return { mutate };
}
