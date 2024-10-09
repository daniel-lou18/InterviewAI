import { cn } from "@/lib/utils";
import { PropsWithChildrenClassName } from "@/utils/types";
import React from "react";

type TextTitleProps = {
  element?: keyof React.JSX.IntrinsicElements;
} & PropsWithChildrenClassName;

export default function TextTitle({
  children,
  element = "h4",
  className,
}: TextTitleProps) {
  const Element = element;
  return (
    <Element className={cn("font-semibold", className)}>{children}</Element>
  );
}
