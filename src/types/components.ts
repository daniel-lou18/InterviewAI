import { ViewOptions } from "@/slices/layoutSlice";
import { PropsWithChildren } from "react";

export type PropsWithChildrenClassName = PropsWithChildren<{
  className?: string;
}>;

export type View = { view: ViewOptions };

export type LayoutTable<T extends string> = Record<T, string>;
