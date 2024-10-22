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

  if (!isPending && !!evaluation) {
    return (
      <div className="flex items-center text-green-600 text-sm font-semibold">
        <CheckedButtonContent />
      </div>
    );
  }

  return (
    <>
      <Button
        type="submit"
        size="sm"
        disabled={!text}
        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
      >
        <LoaderWrapper
          isLoading={isPending}
          LoadingIndicator={LoadingButtonContent}
        >
          <EvaluateButtonContent />
        </LoaderWrapper>
      </Button>
    </>
  );
}
