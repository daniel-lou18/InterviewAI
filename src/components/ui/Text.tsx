import React, { PropsWithChildren } from "react";

type TextProps = {
  element?: keyof React.JSX.IntrinsicElements;
} & PropsWithChildren;

export default function Text({ children, element = "p" }: TextProps) {
  const Element = element;
  return <Element className="mb-2">{children}</Element>;
}
