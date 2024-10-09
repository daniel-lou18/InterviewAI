import { Loader2 } from "lucide-react";
import Container from "./Container";

export default function Loader() {
  return (
    <Container className="w-full flex justify-center">
      <Loader2 className="animate-spin size-12" />
    </Container>
  );
}
