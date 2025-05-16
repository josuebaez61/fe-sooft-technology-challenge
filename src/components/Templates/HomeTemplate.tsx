import CardList from "../Organisms/CardList";
import "./HomeTemplate.scss";

export default function HomeTemplate() {
  return (
    <div className="home-container">
      <div className="container mx-auto">
        <CardList />
      </div>
    </div>
  );
}
