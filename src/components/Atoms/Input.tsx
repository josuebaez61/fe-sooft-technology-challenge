import classNames from "classnames";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

export default function Input({ value, ...props }: InputProps) {
  const controlledValue = value !== undefined && value !== null ? value : "";

  return (
    <input
      {...props}
      value={controlledValue}
      className={classNames(
        props.className,
        "w-full",
        "appearance-none",
        "outline-none",
        "border-2",
        "border-golden",
        "bg-transparent",
        "text-white",
        "p-2",
        "rounded-none",
        "transition-colors"
      )}
    />
  );
}
