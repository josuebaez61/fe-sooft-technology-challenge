import { type PropsWithChildren } from "react";
import AppHeader from "../Organisms/AppHeader";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="py-5 px-3">
      <div className="container mx-auto">
        <AppHeader />
        {children}
      </div>
    </div>
  );
}
