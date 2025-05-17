import type { PropsWithChildren } from "react";

const Backdrop = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed inset-0 bg-backdrop bg-opacity-50">{children}</div>
  );
};

export default Backdrop;
