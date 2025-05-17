import { Controller, type Control } from "react-hook-form";
import FormField from "./FormField";
import Textarea from "../Atoms/Textarea";
import Input from "../Atoms/Input";
import type { QuoteForm } from "../../models";

interface QuoteFormProps {
  control: Control<QuoteForm>;
}

export default function QuoteForm({ control }: QuoteFormProps) {
  return (
    <>
      <Controller
        control={control}
        name="quote"
        render={({ field }) => (
          <FormField label="Frase">
            <Textarea {...field} />
          </FormField>
        )}
      />
      <Controller
        control={control}
        name="author"
        render={({ field }) => (
          <FormField label="Autor">
            <Input {...field} />
          </FormField>
        )}
      />
    </>
  );
}
