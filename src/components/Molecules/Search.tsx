import ClickableText from "../Atoms/ClickableText";
import Input from "../Atoms/Input";

interface SearchProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ onChange }: SearchProps) {
  return (
    <div>
      <h2 className="text-center text-golden text-2xl mb-3">Buscador</h2>
      <div className="mb-3">
        <Input className="border-white" onChange={onChange} />
      </div>
      <div className="flex justify-end">
        <ClickableText className="text-white" text="Limpiar Filtros" />
      </div>
    </div>
  );
}
