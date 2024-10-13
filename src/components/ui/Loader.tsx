import { Loader2 } from "lucide-react";
import Container from "./Container";

type LoaderProps = { size?: "sm" | "lg" };

export default function Loader({ size = "lg" }: LoaderProps) {
  if (size === "sm") {
    return <Loader2 className="animate-spin size-4 mr-2" />;
  }

  return (
    <Container className="w-full flex justify-center">
      <Loader2 className="animate-spin size-8" />
    </Container>
  );
}
