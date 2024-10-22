import { Button } from "@/components/ui/button";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import { useRecord } from "@/hooks/useRecord";
import { useIsMutating } from "@tanstack/react-query";
import LoadingButtonContent from "../../ui/LoadingButtonContent";
import RecordButtonContent from "./RecordButtonContent";
import PauseButtonContent from "./PauseButtonContent";

type RecordButtonProps = Pick<
  ReturnType<typeof useRecord>,
  "isRecording" | "handleStartRecording" | "handleStopRecording"
>;

export default function RecordButton({
  isRecording,
  handleStartRecording,
  handleStopRecording,
}: RecordButtonProps) {
  const isLoading = useIsMutating({ mutationKey: ["transcription"] });

  return (
    <Button
      disabled={!!isLoading}
      size="sm"
      onClick={isRecording ? handleStopRecording : handleStartRecording}
      className={`transition-all duration-300 ${
        isRecording
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
      }`}
    >
      <LoaderWrapper
        isLoading={!!isLoading}
        LoadingIndicator={LoadingButtonContent}
      >
        {isRecording ? <PauseButtonContent /> : <RecordButtonContent />}
      </LoaderWrapper>
    </Button>
  );
}
