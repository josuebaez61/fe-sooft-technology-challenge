import type { PropsWithChildren } from "react";
import TextGolden from "../Atoms/TextGolden";

interface FormFieldProps extends PropsWithChildren {
  label?: string;
}

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="flex gap-2 flex-col py-2 w-full">
      {label && (
        <label className="text-sm font-semibold">
          <TextGolden>{label}</TextGolden>
        </label>
      )}
      {children}
    </div>
  );
}
