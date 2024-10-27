import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { tick } from "@/slices/timerSlice";

export function useTimer() {
  const { time } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

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
    clearInterval(timerIdRef.current);
  }, []);

  return { time: formattedTime, startTimer, stopTimer };
}
