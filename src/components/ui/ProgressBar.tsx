import Container from "./Container";
import { Progress } from "./progress";
import Text from "./Text";

export default function ProgressBar() {
  return (
    <Container className="w-1/2 mx-auto mb-6 lg:col-span-2">
      <Progress className="w-full h-4 bg-purple-200" value={10} />
      <Container className="flex justify-between text-sm font-semibold">
        <Text>1 / 10 questions</Text>
        <Text>0 / 100 points</Text>
      </Container>
    </Container>
  );
}
