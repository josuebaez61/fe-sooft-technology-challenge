import classNames from "classnames";
import TextGolden from "./TextGolden";

interface SignatureProps {
  text?: string;
  className?: string;
}

export default function Signature({ text, className }: SignatureProps) {
  return (
    <p className={classNames("font-signature text-4xl", className)}>
      <TextGolden>{text}</TextGolden>
    </p>
  );
}
