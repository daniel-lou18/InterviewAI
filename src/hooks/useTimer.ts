import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { tick, resetTime } from "@/slices/timerSlice";
import { setAnswerTime } from "@/slices/interviewSlice";

export function useTimer() {
  const { time } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    timerIdRef.current = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => {
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [dispatch]);

  const stopTimer = useCallback(() => {
    if (timerIdRef.current === null) return;

    dispatch(setAnswerTime(time));
    clearInterval(timerIdRef.current);
  }, [dispatch, time]);

  const resetTimer = useCallback(() => {
    dispatch(resetTime());
  }, [dispatch]);

  return { time, startTimer, stopTimer, resetTimer };
}
