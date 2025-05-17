import TextGolden from "../Atoms/TextGolden";
import Search from "../Molecules/SearchInput";
import classNames from "classnames";

interface SearchSectionProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  showClearSearchButton: boolean;
  value: string;
}

export default function SearchSection({
  className,
  onChange,
  onClear,
  value,
  showClearSearchButton,
}: SearchSectionProps) {
  return (
    <div className={classNames(className, "w-full")}>
      <h2 className="text-center text-2xl mb-3">
        <TextGolden>Buscador</TextGolden>
      </h2>
      <Search
        value={value}
        showClearSearchButton={showClearSearchButton}
        onChange={onChange}
        onClear={onClear}
      />
    </div>
  );
}
