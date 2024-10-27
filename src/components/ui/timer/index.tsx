import Container from "../Container";

type TimerProps = {
  time: string;
};

export default function Timer({ time }: TimerProps) {
  return (
    <Container className="fixed top-24 right-4 bg-white p-2 rounded-md">
      {time}
    </Container>
  );
}
