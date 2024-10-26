import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import { useRecord } from "@/hooks/useRecord";
import { useIsMutating } from "@tanstack/react-query";
import LoadingButtonContent from "../../ui/LoadingButtonContent";
import ButtonContentRecord from "./ButtonContentRecord";
import ButtonContentStop from "./ButtonContentStop";
import ButtonContentAnswered from "./ButtonContentAnswered";
import { Transcription } from "@/types/interview";

type RecordButtonProps = Pick<
  ReturnType<typeof useRecord>,
  "isRecording" | "handleStartRecording" | "handleStopRecording"
> & { transcription: Transcription | null };

export default function RecordButton({
  isRecording,
  handleStartRecording,
  handleStopRecording,
  transcription,
}: RecordButtonProps) {
  const isLoading = useIsMutating({ mutationKey: ["transcription"] });

  const isDisabled = !!isLoading || !!transcription;
  const buttonBgClass = isRecording
    ? "bg-red-500 hover:bg-red-600"
    : "bg-green-500 hover:bg-green-600";

  return (
    <Button
      disabled={isDisabled}
      size="sm"
      onClick={isRecording ? handleStopRecording : handleStartRecording}
      className={cn("transition-all duration-300", buttonBgClass)}
    >
      <LoaderWrapper
        isLoading={!!isLoading}
        LoadingIndicator={LoadingButtonContent}
      >
        {isRecording ? (
          <ButtonContentStop />
        ) : transcription ? (
          <ButtonContentAnswered />
        ) : (
          <ButtonContentRecord />
        )}
      </LoaderWrapper>
    </Button>
  );
}
