import ClickableText from "../Atoms/ClickableText";
import Input from "../Atoms/Input";

export default function Search() {
  return (
    <div>
      <h2 className="text-center text-golden text-2xl mb-0">Buscador</h2>
      <Input />
      <div className="flex justify-end">
        <ClickableText className="text-white" text="Limpiar Filtros" />
      </div>
    </div>
  );
}
