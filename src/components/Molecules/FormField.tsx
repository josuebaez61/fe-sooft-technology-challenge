import type { PropsWithChildren } from "react";

interface FormFieldProps extends PropsWithChildren {
  label?: string;
}

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="flex gap-2 flex-col py-2 w-full">
      {label && (
        <label className="text-golden text-sm font-semibold">{label}</label>
      )}
      {children}
    </div>
  );
}
