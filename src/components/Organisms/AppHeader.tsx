import { useAppDispatch } from "../../lib/redux/hooks";
import { showQuoteModalForm } from "../../lib/redux/quotes/quotesActions";
import AddButton from "../Molecules/AddButton";
import AppTitle from "../Molecules/AppTitle";

export default function AppHeader() {
  const dispatch = useAppDispatch();
  return (
    <header className="flex justify-between items-center py-4">
      <AppTitle />
      <AddButton onClick={() => dispatch(showQuoteModalForm())} />
    </header>
  );
}
