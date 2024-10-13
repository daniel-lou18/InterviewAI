import {
  ApiSuccessResponse,
  evaluateResponse,
} from "@/services/EvalResponseService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useInterview } from "./useInterview";
import { Evaluation } from "@/types/interview";
import { saveEvaluation, updateScore } from "@/slices/interviewSlice";
import { parseEvaluation } from "@/utils/helpers";

export function useEvaluate() {
  const dispatch = useDispatch();
  const { currentQuestion } = useInterview();

  function handleSuccess(data: ApiSuccessResponse) {
    if (data && "text" in data && currentQuestion) {
      const evaluation: Evaluation = {
        id: Date.now(),
        questionId: currentQuestion.id,
        text: data.text,
      };
      dispatch(saveEvaluation(evaluation));
      const { score } = parseEvaluation(data.text);
      dispatch(updateScore(parseInt(score)));
    }
  }

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (inputs: string) => {
      return evaluateResponse(inputs);
    },
    mutationKey: ["evaluation"],
    onSuccess: handleSuccess,
  });

  return { mutate, isPending, isSuccess };
}
