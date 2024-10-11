import { PropsWithChildrenClassName } from "@/types/components";

export default function Container({
  children,
  className,
}: PropsWithChildrenClassName) {
  return <div className={className}>{children}</div>;
}
