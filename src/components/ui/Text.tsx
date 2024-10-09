import { cn } from "@/lib/utils";
import { PropsWithChildrenClassName } from "@/utils/types";
import React from "react";

type TextProps = {
  element?: keyof React.JSX.IntrinsicElements;
} & PropsWithChildrenClassName;

export default function Text({
  children,
  element = "p",
  className,
}: TextProps) {
  const Element = element;
  return <Element className={cn("mb-2", className)}>{children}</Element>;
}
