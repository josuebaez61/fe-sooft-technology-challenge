import classNames from "classnames";
import "./index.scss";
import Spinner from "../Spinner";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className,
  isLoading,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button border border-golden py-2 px-3 flex items-center justify-center gap-2 text-golden cursor-pointer",
        className
      )}
      disabled={isLoading || disabled}
    >
      {isLoading && <Spinner className="text-xl" />}
      {children}
    </button>
  );
}
