import { formatTime } from "@/utils/helpers";
import Container from "../Container";

type TimerProps = {
  time: number;
};

export default function Timer({ time }: TimerProps) {
  const timeString = formatTime(time);
  return (
    <Container className="fixed top-24 right-4 bg-white p-2 rounded-md">
      {timeString}
    </Container>
  );
}
