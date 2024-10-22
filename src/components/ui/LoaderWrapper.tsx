import { ComponentType, PropsWithChildren } from "react";

type BaseLoadingIndicatorProps = {
  size: "sm" | "lg";
  className: string;
};

type LoaderWrapperProps<T extends BaseLoadingIndicatorProps> =
  PropsWithChildren<{
    isLoading: boolean;
    LoadingIndicator: ComponentType<T>;
    loadingIndicatorProps?: Partial<T>;
    error?: string;
  }>;

export default function LoaderWrapper<T extends BaseLoadingIndicatorProps>({
  children,
  isLoading,
  LoadingIndicator,
  loadingIndicatorProps,
  error,
}: LoaderWrapperProps<T>) {
  if (isLoading) {
    return <LoadingIndicator {...(loadingIndicatorProps as T)} />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return <>{children}</>;
}
