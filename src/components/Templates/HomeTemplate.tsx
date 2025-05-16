import type { Quote } from "../../models";
import { FetchStatus } from "../../utils";
import Search from "../Molecules/Search";
import CardList from "../Organisms/CardList";
import "./HomeTemplate.scss";

interface HomeTemplateProps {
  data: {
    quotes: Quote[];
    status: FetchStatus;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function HomeTemplate({
  data: { quotes, status, onChange },
}: HomeTemplateProps) {
  return (
    <div className="home-container py-5">
      <div className="container mx-auto">
        <div className="mb-5 w-full">
          <Search onChange={onChange} />
        </div>
        <CardList quotes={quotes} isLoading={status === FetchStatus.LOADING} />
      </div>
    </div>
  );
}
