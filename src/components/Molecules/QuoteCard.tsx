import Card from "./Card";
import Signature from "../Atoms/Signature";
import type { Quote } from "../../models";
import ClickableText from "../Atoms/ClickableText";

interface QuoteCardProps {
  quote: Quote;
  onDelete: (quoteId: string) => void;
}

export default function QuoteCard({ quote, onDelete }: QuoteCardProps) {
  const handleDelete = () => {
    if (confirm("¿Estás seguro de que quieres eliminar esta cita?")) {
      onDelete(quote.id);
    }
  };

  return (
    <Card className="group">
      <Card.Body>
        <div className="flex items-start justify-between gap-2">
          <p className="flex-1">{quote.quote}</p>
          <div
            className={
              "flex items-center gap-2 transition-opacity duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            }
          >
            <ClickableText
              onClick={handleDelete}
              className="text-xl"
              text="Eliminar"
            />
          </div>
        </div>
        <div className="mt-4">
          <Signature className="text-end" text={quote.author} />
        </div>
      </Card.Body>
    </Card>
  );
}
