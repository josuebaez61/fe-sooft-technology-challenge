import type { PropsWithChildren } from "react";
import Backdrop from "../Atoms/Backdrop";

interface OverlayProps extends PropsWithChildren {
  onClick?: () => void;
}

export default function Overlay({ children, onClick }: OverlayProps) {
  return (
    <div
      className="animate__animated animate__fadeIn animate__faster"
      onClick={onClick}
    >
      <Backdrop>{children}</Backdrop>
    </div>
  );
}
