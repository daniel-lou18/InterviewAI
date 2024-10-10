import { Card, CardContent, CardFooter, CardHeader } from "./card";
import TextTitle from "./TextTitle";
import { cn } from "@/lib/utils";
import { PropsWithChildrenClassName } from "@/utils/types";

function CardContainer({ children, className }: PropsWithChildrenClassName) {
  return (
    <Card className={cn("mb-6 shadow-lg overflow-hidden", className)}>
      {children}
    </Card>
  );
}

function Header({ children, className }: PropsWithChildrenClassName) {
  return (
    <CardHeader className={cn("bg-blue-500 text-white", className)}>
      <TextTitle element="h2" className="text-lg">
        {children}
      </TextTitle>
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
