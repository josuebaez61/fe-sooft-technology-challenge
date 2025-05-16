import type { Quote } from "../../models";
import Signature from "../Atoms/Signature";
import Spinner from "../Atoms/Spinner";
import Card from "../Molecules/Card";

interface CardListProps {
  quotes: Quote[];
  isLoading?: boolean;
}

export default function CardList({ quotes, isLoading }: CardListProps) {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols gap-4">
          {quotes.map((quote, index) => (
            <Card className="animate__animated animate__fadeIn" key={index}>
              <Card.Body>
                <p>{quote.quote}</p>
                <Signature className="text-end" text={quote.author} />
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
