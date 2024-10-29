import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useQuestions } from "./useQuestions";
import { useEffect } from "react";
import {
  updateQuestions,
  setCurrentQuestionId,
  setQuestionOrder,
  setDirection,
} from "@/slices/interviewSlice";
import { useTimer } from "./useTimer";

export function useInterview() {
  const interview = useSelector((state: RootState) => state.interview);
  const dispatch = useDispatch();
  const {
    currentQuestionId,
    transcriptions,
    evaluations,
    direction,
    audio,
    statusById,
  } = interview;
  const { questions, isLoading, error } = useQuestions();
  const { time, isActive: isActiveTimer } = useTimer();
  const currentQuestion = questions?.find(
    (question) => question.id === currentQuestionId
  );
  const currentQuestionIndex =
    interview.questionOrder.indexOf(currentQuestionId);
  const currentAudio = audio[currentQuestionId];
  const currentTime = statusById[currentQuestionId]?.answered
    ? statusById[currentQuestionId].answerTime
    : isActiveTimer
    ? time
    : 0;

  useEffect(() => {
    if (questions?.length) {
      dispatch(updateQuestions(questions.map((q) => q.id)));
      dispatch(setQuestionOrder(questions.map((q) => q.id)));
      dispatch(
        setCurrentQuestionId(
          currentQuestionId ? currentQuestionId : questions[0].id
        )
      );
    }
  }, [questions, dispatch, currentQuestionId]);

  const transcription = currentQuestion
    ? transcriptions[currentQuestionId]
    : null;
  const evaluation = currentQuestion ? evaluations[currentQuestionId] : null;

  function toNextQuestion() {
    dispatch(setDirection(1));
    dispatch(
      setCurrentQuestionId(interview.questionOrder[currentQuestionIndex + 1])
    );
  }

  function toPrevQuestion() {
    dispatch(setDirection(-1));
    dispatch(
      setCurrentQuestionId(interview.questionOrder[currentQuestionIndex - 1])
    );
  }

  return {
    isLoading,
    error,
    currentQuestion,
    currentQuestionId,
    currentQuestionIndex,
    currentAudio,
    transcription,
    evaluation,
    toNextQuestion,
    toPrevQuestion,
    direction,
    currentTime,
  };
}
