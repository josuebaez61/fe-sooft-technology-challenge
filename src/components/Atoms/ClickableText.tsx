import classNames from "classnames";

export interface ClickableTextProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function ClickableText({
  text,
  onClick,
  className,
}: ClickableTextProps) {
  return (
    <p
      onClick={onClick}
      className={classNames(
        "m-0 hover:underline hover:cursor-pointer",
        className
      )}
    >
      {text}
    </p>
  );
}
