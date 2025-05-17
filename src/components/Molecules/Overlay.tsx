import Backdrop from "../Atoms/Backdrop";

interface OverlayProps {
  isVisible: boolean;
  onClick?: () => void;
}

export default function Overlay({ isVisible, onClick }: OverlayProps) {
  if (!isVisible) return null;

  return (
    <div onClick={onClick}>
      <Backdrop />
    </div>
  );
}
