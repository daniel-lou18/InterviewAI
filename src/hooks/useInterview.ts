import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useQuestions } from "./useQuestions";
import { useEffect } from "react";
import {
  updateQuestions,
  setCurrentQuestion,
  setQuestionOrder,
} from "@/slices/interviewSlice";

export function useInterview() {
  const interview = useSelector((state: RootState) => state.interview);
  const dispatch = useDispatch();
  const { currentQuestionId, transcriptions, evaluations } = interview;
  const { questions, isLoading, error } = useQuestions();

  useEffect(() => {
    if (questions?.length) {
      dispatch(updateQuestions(questions.map((q) => q.id.toString())));
      dispatch(setQuestionOrder(questions.map((q) => q.id.toString())));
      dispatch(setCurrentQuestion(questions[0].id.toString()));
    }
  }, [questions, dispatch]);

  const currentQuestion = questions?.find(
    (question) => question.id.toString() === currentQuestionId
  );
  const transcription = currentQuestion
    ? transcriptions[currentQuestion.id]
    : null;
  const evaluation = currentQuestion ? evaluations[currentQuestion.id] : null;

  const currentQuestionIndex =
    interview.questionOrder.indexOf(currentQuestionId);

  function toNextQuestion() {
    dispatch(
      setCurrentQuestion(interview.questionOrder[currentQuestionIndex + 1])
    );
  }

  function toPrevQuestion() {
    dispatch(
      setCurrentQuestion(interview.questionOrder[currentQuestionIndex - 1])
    );
  }

  return {
    isLoading,
    error,
    currentQuestion,
    currentQuestionId,
    currentQuestionIndex,
    transcription,
    evaluation,
    toNextQuestion,
    toPrevQuestion,
  };
}
