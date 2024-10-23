import { ChevronDown, ChevronUp } from "lucide-react";

type ExpandButtonProps = {
  disabled: boolean;
  isExpanded: boolean;
  onClick: () => void;
};

export default function ExpandButton({
  disabled,
  isExpanded,
  onClick,
}: ExpandButtonProps) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {isExpanded ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}
