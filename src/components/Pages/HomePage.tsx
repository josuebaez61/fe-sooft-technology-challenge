import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import {
  createQuote,
  deleteQuote,
  fetchQuotes,
} from "../../lib/redux/quotes/quotesThunks";
import DefaultLayout from "../Templates/DefaultLayout";
import QuoteList from "../Organisms/QuoteList";
import QuoteModalForm from "../Organisms/QuoteModalForm";
import SearchSection from "../Organisms/SearchSection";
import { debounceTime, Subject, Subscription } from "rxjs";
import type { CreateQuotePayload } from "../../models";
import { hideQuoteModalForm } from "../../lib/redux/quotes/quotesActions";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    currentSearch,
    quotes,
    isCreating,
    isLoading,
    loadError,
    modalFormVisible,
    createError,
  } = useAppSelector((state) => state.quotes);
  const searchValue$ = useRef(new Subject<string>());
  const subscriptionRef = useRef<Subscription | null>(null);

  useEffect(() => {
    dispatch(fetchQuotes({}));
    subscriptionRef.current = searchValue$.current
      .pipe(debounceTime(800))
      .subscribe((value) => {
        dispatch(fetchQuotes({ searchValue: value }));
      });

    return () => {
      subscriptionRef.current?.unsubscribe();
    };
  }, [dispatch]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    searchValue$.current.next(event.currentTarget.value);
  };

  const onClearSearchValue = () => {
    setSearchValue("");
    dispatch(fetchQuotes({}));
  };

  const onDeleteQueue = (id: string) => {
    dispatch(deleteQuote(id));
  };

  const handleCreateQuote = (payload: CreateQuotePayload) => {
    dispatch(createQuote(payload));
  };

  const handleCloseQuoteModalForm = () => {
    dispatch(hideQuoteModalForm());
  };

  return (
    <DefaultLayout>
      <SearchSection
        className="mb-5"
        onChange={onSearchChange}
        onClear={onClearSearchValue}
        showClearSearchButton={!!currentSearch}
        value={searchValue}
      />
      <QuoteList
        loadError={loadError}
        isLoading={isLoading}
        onDeleteQueue={onDeleteQueue}
        quotes={quotes}
      />
      <QuoteModalForm
        createError={createError}
        isCreating={isCreating}
        onClose={handleCloseQuoteModalForm}
        onCreate={handleCreateQuote}
        visible={modalFormVisible}
      />
    </DefaultLayout>
  );
}
