import classNames from "classnames";

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {};

export default function Textarea({ value, ...props }: TextareaProps) {
  const controlledValue = value !== undefined && value !== null ? value : "";

  return (
    <textarea
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
