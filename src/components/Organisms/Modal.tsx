import type { PropsWithChildren, ReactNode } from "react";
import Card from "../Molecules/Card";
import Overlay from "../Molecules/Overlay";
import TextGolden from "../Atoms/TextGolden";

export interface ModalProps extends PropsWithChildren {
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  footer?: () => ReactNode;
}

export default function Modal({
  children,
  onClose,
  visible,
  title,
  footer,
}: ModalProps) {
  if (!visible) return null;

  return (
    <Overlay onClick={onClose}>
      <div className="flex items-center justify-center h-screen">
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <Card className="w-full min-w-[280px] sm:min-w-[340px] md:min-w-[400px] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <Card.Header>
              <div className="flex justify-between">
                {title && (
                  <h2 className="text-2xl">
                    <TextGolden>{title}</TextGolden>
                  </h2>
                )}
                <button
                  className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                  onClick={onClose}
                  aria-label="Cerrar"
                >
                  &times;
                </button>
              </div>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
            {footer && <Card.Footer>{footer()}</Card.Footer>}
          </Card>
        </div>
      </div>
    </Overlay>
  );
}
