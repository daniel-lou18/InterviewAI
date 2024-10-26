import { ViewOptions } from "@/slices/layoutSlice";
import { Button } from "../button";
import Container from "../Container";
import Icon from "../Icon";
import { cn } from "@/lib/utils";

type ViewSwitcherProps = {
  currentView: ViewOptions;
  handleViewChange: (newView: ViewOptions) => void;
};

const getButtonClassname = (
  buttonView: ViewOptions,
  currentView: ViewOptions
) =>
  cn("hover:bg-purple-50", {
    "bg-purple-100 hover:bg-purple-100 text-purple-600 hover:text-purple-600 transition-colors":
      buttonView === currentView,
  });

export default function ViewSwitcher({
  currentView,
  handleViewChange,
}: ViewSwitcherProps) {
  return (
    <Container className="hidden lg:flex fixed top-4 right-4 bg-white rounded-lg shadow-lg p-1 gap-1">
      <Button
        variant="ghost"
        size="icon"
        className={getButtonClassname("vertical", currentView)}
        onClick={() => handleViewChange("vertical")}
      >
        <Icon iconName="Rows" className="mr-0" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={getButtonClassname("horizontal", currentView)}
        onClick={() => handleViewChange("horizontal")}
      >
        <Icon iconName="Columns" className="mr-0" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={getButtonClassname("stacked", currentView)}
        onClick={() => handleViewChange("stacked")}
      >
        <Icon iconName="Rows3" className="mr-0" />
      </Button>
    </Container>
  );
}
