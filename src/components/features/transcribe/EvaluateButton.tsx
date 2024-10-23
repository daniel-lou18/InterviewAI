import { Button } from "@/components/ui/button";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import LoadingButtonContent from "@/components/ui/LoadingButtonContent";
import { useInterview } from "@/hooks/useInterview";
import CheckedButtonContent from "./CheckedButtonContent";
import EvaluateButtonContent from "./EvaluateButtonContent";

type EvaluateButtonProps = { isPending: boolean };

export default function EvaluateButton({ isPending }: EvaluateButtonProps) {
  const { transcription, evaluation } = useInterview();
  const text = transcription ? transcription.text : "";

  return (
    <>
      <Button
        type="submit"
        size="sm"
        disabled={!text || (!isPending && !!evaluation)}
        className={`${
          !isPending && !!evaluation
            ? "bg-green-500"
            : "bg-blue-500 hover:bg-blue-600"
        } transition-colors duration-300`}
      >
        <LoaderWrapper
          isLoading={isPending}
          LoadingIndicator={LoadingButtonContent}
        >
          {evaluation ? <CheckedButtonContent /> : <EvaluateButtonContent />}
        </LoaderWrapper>
      </Button>
    </>
  );
}
