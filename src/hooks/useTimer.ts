import { useEffect, useState } from "react";

export function useTimer() {
  const [time, setTime] = useState(0);
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return { time: formattedTime };
}
