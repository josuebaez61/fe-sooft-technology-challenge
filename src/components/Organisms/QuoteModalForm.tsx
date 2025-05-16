import Modal from "../Molecules/Modal";
import Button from "../Atoms/Button";
import FormField from "../Molecules/FormField";
import Input from "../Atoms/Input";
import Textarea from "../Atoms/Textarea";

type QuoteModalFormProps = {
  visible?: boolean;
  onClose?: () => void;
  onSave?: () => void;
};

export default function QuoteModalForm({
  visible,
  onClose,
  onSave,
}: QuoteModalFormProps) {
  const renderModalFooter = () => {
    return (
      <div className="flex justify-end gap-2">
        <Button onClick={onSave}>Guardar</Button>
        <Button onClick={onClose}>Cancelar</Button>
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
      <FormField label="Frase">
        <Textarea />
      </FormField>
      <FormField label="Autor">
        <Input />
      </FormField>
    </Modal>
  );
}
