import Button from "../Atoms/Button";

interface AddButtonProps {
  onClick?: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return <Button onClick={onClick}>Agregar</Button>;
}
