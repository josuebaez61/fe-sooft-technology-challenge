import classNames from "classnames";
import "./index.scss";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button border border-golden py-2 px-3 flex flex-col text-golden cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
