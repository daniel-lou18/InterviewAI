import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import TextTitle from "./TextTitle";
import { cn } from "@/lib/utils";
import { PropsWithChildrenClassName } from "@/types/components";

type HeaderActions = { actions?: ReactNode };

function CardContainer({ children, className }: PropsWithChildrenClassName) {
  return (
    <Card className={cn("mb-6 shadow-lg overflow-hidden", className)}>
      {children}
    </Card>
  );
}

function Header({
  children,
  actions,
  className,
}: PropsWithChildrenClassName & HeaderActions) {
  return (
    <CardHeader
      className={cn("flex justify-between bg-blue-500 text-white", className)}
    >
      <TextTitle element="h2" className="text-lg">
        {children}
      </TextTitle>
      {actions}
    </CardHeader>
  );
}

function Content({ children, className }: PropsWithChildrenClassName) {
  return <CardContent className={className}>{children}</CardContent>;
}

function Footer({ children, className }: PropsWithChildrenClassName) {
  return <CardFooter className={cn("flex", className)}>{children}</CardFooter>;
}

CardContainer.Header = Header;
CardContainer.Content = Content;
CardContainer.Footer = Footer;

export default CardContainer;
