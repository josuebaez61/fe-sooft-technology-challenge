import classNames from "classnames";

interface SignatureProps {
  text?: string;
  className?: string;
}

export default function Signature({ text, className }: SignatureProps) {
  return (
    <p className={classNames("font-signature text-4xl", className)}>{text}</p>
  );
}
