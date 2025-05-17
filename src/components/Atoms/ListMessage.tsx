interface ListMessageProps {
  message?: string;
}

export default function ListMessage({ message }: ListMessageProps) {
  return <p className=" text-center text-white m-0 text-4xl">{message}</p>;
}
