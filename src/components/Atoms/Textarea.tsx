import classNames from "classnames";

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {};

export default function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
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
