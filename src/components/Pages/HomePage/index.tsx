import { useEffect, useRef, useState } from "react";
import HomeTemplate from "../../Templates/HomeTemplate";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { fetchQuotes } from "../../../lib/redux/quotes/quotesThunks";
import { debounceTime, Subject, Subscription } from "rxjs";

export default function HomePage() {
  const [newQuoteModalVisible, setNewQuoteModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const searchKeyUp$ = useRef(new Subject<string>());
  const subscriptionRef = useRef<Subscription | null>(null);
  const { items: quotes, status } = useAppSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());

    subscriptionRef.current = searchKeyUp$.current
      .pipe(debounceTime(1000))
      .subscribe((searchValue) => {
        dispatch(fetchQuotes(searchValue));
      });

    return () => {
      subscriptionRef.current?.unsubscribe();
    };
  }, [dispatch]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchKeyUp$.current.next(event.currentTarget.value);
  };

  return (
    <HomeTemplate
      data={{
        quotes,
        status,
        onSearchChange,
        newQuoteModalVisible,
        onCloseNewQuoteModal: () => setNewQuoteModalVisible(false),
        onOpenNewQuoteModal: () => setNewQuoteModalVisible(true),
      }}
    />
  );
}
