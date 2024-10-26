import { Button } from "@/components/ui/button";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import LoadingButtonContent from "@/components/ui/LoadingButtonContent";
import ButtonContentChecked from "./ButtonContentChecked";
import ButtonContentEvaluate from "./ButtonContentEvaluate";
import { Evaluation, Transcription } from "@/types/interview";

type EvaluateButtonProps = {
  isPending: boolean;
  transcription: Transcription | null;
  evaluation: Evaluation | null;
};

export default function EvaluateButton({
  isPending,
  transcription,
  evaluation,
}: EvaluateButtonProps) {
  const text = transcription ? transcription.text : "";

  const isDisabled = !text || (!isPending && !!evaluation);
  const buttonBgClass =
    !isPending && !!evaluation
      ? "bg-green-500"
      : "bg-blue-500 hover:bg-blue-600";

  return (
    <>
      <Button
        type="submit"
        size="sm"
        disabled={isDisabled}
        className={`${buttonBgClass} transition-colors duration-300`}
      >
        <LoaderWrapper
          isLoading={isPending}
          LoadingIndicator={LoadingButtonContent}
        >
          {evaluation ? <ButtonContentChecked /> : <ButtonContentEvaluate />}
        </LoaderWrapper>
      </Button>
    </>
  );
}
