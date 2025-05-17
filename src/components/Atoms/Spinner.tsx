import classNames from "classnames";

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <i
      className={classNames(
        "text-golden fa-solid fa-circle-notch fa-spin text-4xl",
        className
      )}
    ></i>
  );
}
