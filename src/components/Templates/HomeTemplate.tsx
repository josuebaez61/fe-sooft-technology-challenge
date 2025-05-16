import type { Quote } from "../../models";
import { FetchStatus } from "../../utils";
import HomeHeader from "../Organisms/HomeHeader";
import CardList from "../Organisms/CardList";
import "./HomeTemplate.scss";
import QuoteModalForm from "../Organisms/QuoteModalForm";

interface HomeTemplateProps {
  data: {
    quotes: Quote[];
    status: FetchStatus;
    newQuoteModalVisible?: boolean;
    onOpenNewQuoteModal?: () => void;
    onCloseNewQuoteModal?: () => void;
    onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function HomeTemplate({
  data: {
    quotes,
    status,
    onSearchChange,
    newQuoteModalVisible,
    onCloseNewQuoteModal,
    onOpenNewQuoteModal,
  },
}: HomeTemplateProps) {
  return (
    <div className="home-container py-5">
      <div className="container mx-auto">
        <HomeHeader onAddQuote={onOpenNewQuoteModal} />
        <CardList
          quotes={quotes}
          isLoading={status === FetchStatus.LOADING}
          onSearchChange={onSearchChange}
        />
        <QuoteModalForm
          visible={newQuoteModalVisible}
          onClose={onCloseNewQuoteModal}
        />
      </div>
    </div>
  );
}
