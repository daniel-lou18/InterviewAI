import { PropsWithChildrenClassName } from "@/utils/types";

export default function Container({
  children,
  className,
}: PropsWithChildrenClassName) {
  return <div className={className}>{children}</div>;
}
