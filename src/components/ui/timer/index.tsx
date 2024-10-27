import { useTimer } from "@/hooks/useTimer";
import Container from "../Container";

export default function Timer() {
  const { time } = useTimer();
  return (
    <Container className="fixed top-24 right-4 bg-white p-2 rounded-md">
      {time}
    </Container>
  );
}
