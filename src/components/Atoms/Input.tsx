import classNames from "classnames";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={classNames(
        props.className,
        "w-full",
        "appearance-none",
        "outline-none",
        "border-2",
        "border-grey-500",
        "bg-transparent",
        "text-white",
        "p-2",
        "rounded-none",
        "focus:border-white",
        "focus:border-white",
        "transition-colors"
      )}
    />
  );
}
