import ListMessage from "../Atoms/ListMessage";

interface LoadErrorMessageProps {
  className?: string;
  message: string;
}

export default function LoadErrorMessage({ message }: LoadErrorMessageProps) {
  return <ListMessage message={message} />;
}
