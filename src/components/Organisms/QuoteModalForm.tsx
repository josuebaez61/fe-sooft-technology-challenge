import Modal from "./Modal";
import Button from "../Atoms/Button";
import { useForm } from "react-hook-form";
import type {
  CreateQuotePayload,
  QuoteForm as QuoteFormModel,
} from "../../models";
import QuoteForm from "../Molecules/QuoteForm";
import { useEffect } from "react";

interface QuoteModalFormProps {
  visible?: boolean;
  isCreating?: boolean;
  onCreate: (formValue: CreateQuotePayload) => void;
  onClose?: () => void;
  createError?: string | null;
}

export default function QuoteModalForm({
  isCreating,
  visible,
  onCreate,
  onClose,
  createError,
}: QuoteModalFormProps) {
  const { control, handleSubmit, reset } = useForm<QuoteFormModel>();

  useEffect(() => {
    if (!visible) {
      reset();
    }
  }, [visible, reset]);

  useEffect(() => {
    if (createError) {
      alert(createError);
    }
  }, [createError]);

  const onSubmit = async (formValue: QuoteFormModel) => {
    if (!formValue.author) {
      alert("El autor es requerido");
      return;
    }
    if (!formValue.quote) {
      alert("La cita es requerida");
      return;
    }
    const payload: CreateQuotePayload = {
      author: formValue.author,
      quote: formValue.quote,
    };
    onCreate(payload);
  };

  const renderModalFooter = () => {
    return (
      <div className="flex justify-end gap-2">
        <Button isLoading={isCreating} onClick={handleSubmit(onSubmit)}>
          Guardar
        </Button>
        <Button disabled={isCreating} onClick={onClose}>
          Cancelar
        </Button>
      </div>
    );
  };
  return (
    <Modal
      title="Nueva frase"
      visible={visible}
      footer={renderModalFooter}
      onClose={onClose}
    >
      <QuoteForm control={control} />
    </Modal>
  );
}
