import Transcription from "../components/features/transcribe";
import PageTitle from "../components/ui/PageTitle";
import Question from "../components/features/question";
import Container from "../components/ui/Container";
import Evaluation from "@/components/features/evaluate";
import ProgressBar from "@/components/features/question/ProgressBar";
import ResetButton from "@/components/features/ResetButton";
import ViewSwitcher from "@/components/ui/viewSwitcher";
import { useLayout } from "@/hooks/useLayout";
import { LayoutTable } from "@/types/components";
import { ViewOptions } from "@/slices/layoutSlice";
import { cn } from "@/lib/utils";
import Timer from "@/components/ui/timer";
import { useTimer } from "@/hooks/useTimer";
import { useInterview } from "@/hooks/useInterview";

export default function Interview() {
  const { view, updateView } = useLayout();
  const { resetTimer, startTimer, stopTimer } = useTimer();
  const { currentTime } = useInterview();

  const layoutClasses: LayoutTable<ViewOptions> = {
    vertical: "gap-x-4 gap-y-6",
    horizontal: "gap-x-6 gap-y-4",
    stacked: "gap-y-4",
  };

  return (
    <Container
      className={cn(
        "container mx-auto px-4 py-8 lg:grid grid-cols-2 lg:w-[960px]",
        layoutClasses[view]
      )}
    >
      <ViewSwitcher currentView={view} handleViewChange={updateView} />
      <Timer time={currentTime || 0} />
      <PageTitle>Interview AI 🤖</PageTitle>
      <ProgressBar />
      <Question
        view={view}
        resetTimer={resetTimer}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <Transcription view={view} />
      <Evaluation view={view} />
      <ResetButton />
    </Container>
  );
}
