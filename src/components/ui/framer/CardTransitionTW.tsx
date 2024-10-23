import { useInterview } from "@/hooks/useInterview";
import { cn } from "@/lib/utils";
import { useEffect, useState, Key, PropsWithChildren } from "react";

type CardTransitionProps = PropsWithChildren<{
  cardKey: Key;
  className?: string;
}>;

export default function CardTransitionTW({
  children,
  cardKey,
  className,
}: CardTransitionProps) {
  const { direction } = useInterview();
  const [isVisible, setIsVisible] = useState(false);
  const [prevKey, setPrevKey] = useState(cardKey);

  useEffect(() => {
    if (prevKey !== cardKey) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setPrevKey(cardKey);
        setIsVisible(true);
      }, 500); // Matches the delay in the original
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [cardKey, prevKey]);

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-in-out",
        isVisible
          ? "translate-x-0 opacity-100"
          : direction > 0
          ? "translate-x-24 opacity-0"
          : "-translate-x-24 opacity-0",
        className
      )}
    >
      {prevKey === cardKey && children}
    </div>
  );
}
