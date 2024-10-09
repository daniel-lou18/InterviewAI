import React, { PropsWithChildren } from "react";

type TextTitleProps = {
  element?: keyof React.JSX.IntrinsicElements;
} & PropsWithChildren;

export default function TextTitle({
  children,
  element = "h4",
}: TextTitleProps) {
  const Element = element;
  return <Element className="font-semibold">{children}</Element>;
}
