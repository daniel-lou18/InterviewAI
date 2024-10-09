import { evaluateResponse } from "@/services/EvalResponseService";
import { createAnswerInput } from "@/utils/prompts";
import { useState } from "react";
import { useEffect } from "react";

export default function useEvaluate(userResponse: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!userResponse) return;

    async function getFeedback() {
      setIsLoading(true);
      const inputs = createAnswerInput(userResponse);
      const result = await evaluateResponse(inputs);

      if ("error" in result) {
        setError(result.error.message);
        setIsLoading(false);
      } else {
        const feedback = result.text;
        console.log(feedback);
        setFeedback(feedback);
        setIsLoading(false);
      }
    }

    getFeedback();
  }, [userResponse]);

  return { isLoading, error, feedback };
}
