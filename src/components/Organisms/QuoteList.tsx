import EmptyMessage from "../Molecules/EmptyMessage";
import QuoteCard from "../Molecules/QuoteCard";
import Spinner from "../Atoms/Spinner";
import type { Quote } from "../../models";
import LoadErrorMessage from "../Molecules/LoadErrorMessage";

interface CardListProps {
  quotes: Quote[];
  isLoading: boolean;
  loadError: string | null;
  onDeleteQueue: (quoteId: string) => void;
}

export default function QuoteList({
  isLoading,
  quotes,
  loadError,
  onDeleteQueue,
}: CardListProps) {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : loadError ? (
        <LoadErrorMessage message={loadError} />
      ) : quotes.length === 0 ? (
        <EmptyMessage />
      ) : (
        <div className="grid grid-cols gap-4">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} onDelete={onDeleteQueue} quote={quote} />
          ))}
        </div>
      )}
    </>
  );
}
