import classNames from "classnames";
import type { PropsWithChildren } from "react";
import TextGolden from "./TextGolden";

interface QuoteTextProps extends PropsWithChildren {
  className?: string;
  quote: string;
}

export default function QuoteText({ className, quote }: QuoteTextProps) {
  return (
    <TextGolden className={classNames("text-xl", className)}>
      "{quote}"
    </TextGolden>
  );
}
