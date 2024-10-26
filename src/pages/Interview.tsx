import Transcription from "../components/features/transcribe";
import PageTitle from "../components/ui/PageTitle";
import Question from "../components/features/question";
import Container from "../components/ui/Container";
import Evaluation from "@/components/features/evaluate";
import ProgressBar from "@/components/features/question/ProgressBar";
import ResetButton from "@/components/features/ResetButton";
import ViewSwitcher from "@/components/ui/viewSwitcher";
import { useLayout } from "@/hooks/useLayout";

const Interview = () => {
  const { view, updateView } = useLayout();

  return (
    <Container className="min-h-screen container mx-auto px-4 py-8 lg:grid grid-cols-2 lg:w-[960px] gap-x-6">
      <ViewSwitcher currentView={view} handleViewChange={updateView} />
      <PageTitle>Interview AI 🤖</PageTitle>
      <ProgressBar />
      <Question view={view} />
      <Transcription view={view} />
      <Evaluation view={view} />
      <ResetButton />
    </Container>
  );
};

export default Interview;
