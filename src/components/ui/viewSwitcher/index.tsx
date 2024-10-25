import { Button } from "../button";
import Container from "../Container";
import Icon from "../Icon";

export type ViewOptions = "vertical" | "horizontal" | "stacked";

type ViewSwitcherProps = {
  currentView: ViewOptions;
  handleViewChange: (newView: string) => void;
};

export default function ViewSwitcher({
  currentView,
  handleViewChange,
}: ViewSwitcherProps) {
  return (
    <Container className="hidden lg:flex fixed top-4 right-4 bg-white rounded-lg shadow-lg p-1 gap-1">
      <Button
        variant="ghost"
        size="icon"
        className={`${
          currentView === "vertical" ? "bg-purple-100 text-purple-600" : ""
        }`}
        onClick={() => handleViewChange("vertical")}
      >
        <Icon iconName="Rows" className="mr-0" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`${
          currentView === "horizontal" ? "bg-purple-100 text-purple-600" : ""
        }`}
        onClick={() => handleViewChange("horizontal")}
      >
        <Icon iconName="Columns" className="mr-0" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`${
          currentView === "stacked" ? "bg-purple-100 text-purple-600" : ""
        }`}
        onClick={() => handleViewChange("stacked")}
      >
        <Icon iconName="Rows3" className="mr-0" />
      </Button>
    </Container>
  );
}
