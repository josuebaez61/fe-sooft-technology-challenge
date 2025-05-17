import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface TextGoldenProps extends PropsWithChildren {
  className?: string;
}

export default function TextGolden({ children, className }: TextGoldenProps) {
  return (
    <span className={classNames("text-golden", className)}>{children}</span>
  );
}
