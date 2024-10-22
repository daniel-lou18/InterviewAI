import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import Loader from "@/components/ui/Loader";
import { useInterview } from "@/hooks/useInterview";

type EvaluateButtonProps = { isPending: boolean; isSuccess: boolean };

export default function EvaluateButton({
  isPending,
  isSuccess,
}: EvaluateButtonProps) {
  const { transcription } = useInterview();
  const text = transcription ? transcription.text : "";

  return (
    <Button
      type="submit"
      size="sm"
      disabled={!text || (!isPending && isSuccess)}
      className=" bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
    >
      {isPending && (
        <>
          <Loader size="sm" />
          En cours
        </>
      )}
      {!isPending && !isSuccess && (
        <>
          <Icon iconName="ClipboardPaste" />
          Évaluer
        </>
      )}
      {!isPending && isSuccess && (
        <>
          <Icon iconName="Check" />
          Évalué
        </>
      )}
    </Button>
  );
}
