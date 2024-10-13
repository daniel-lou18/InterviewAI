import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import Loader from "@/components/ui/Loader";
import { useRecord } from "@/hooks/useRecord";
import { useIsMutating } from "@tanstack/react-query";

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
      {!!isLoading && <Loader size="sm" />}
      {!isLoading && isRecording ? (
        <Icon iconName="Pause" />
      ) : (
        <Icon iconName="CircleDot" />
      )}
      {!isLoading && isRecording ? "Arrêter" : "Enregistrer"}
    </Button>
  );
}
