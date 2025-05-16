import AddButton from "../Molecules/AddButton";
import AppTitle from "../Molecules/AppTitle";

interface HomeHeaderProps {
  onAddQuote?: () => void;
}

export default function HomeHeader({ onAddQuote }: HomeHeaderProps) {
  return (
    <header className="flex justify-between items-center py-4">
      <AppTitle />
      <AddButton onClick={onAddQuote} />
    </header>
  );
}
