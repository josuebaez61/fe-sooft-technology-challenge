import classNames from "classnames";
import ClickableText from "../Atoms/ClickableText";
import Input from "../Atoms/Input";

interface SearchProps {
  value?: string;
  showClearSearchButton?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export default function SearchInput({
  value,
  onChange,
  className,
  showClearSearchButton,
  onClear,
}: SearchProps) {
  return (
    <div className={classNames(className)}>
      <div className="mb-3">
        <Input
          placeholder="Escriba su búsqueda y espere un instante..."
          className="border-white"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-end">
        <ClickableText
          onClick={onClear}
          className={classNames(
            "text-white",
            showClearSearchButton ? "opacity-100" : "opacity-0"
          )}
          text="Limpiar Busqueda"
        />
      </div>
    </div>
  );
}
