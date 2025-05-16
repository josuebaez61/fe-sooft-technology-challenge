import Card from "../Molecules/Card";
import Search from "../Molecules/Search";

export default function CardList() {
  return (
    <div className="grid grid-cols gap-4">
      <div className="mb-5 w-full">
        <Search />
      </div>
      <Card>
        <Card.Body>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eum
          nisi cum distinctio rem, aliquid exercitationem tenetur vitae iure
          expedita laborum nam pariatur quam ducimus ad magni non veritatis
          voluptate.
        </Card.Body>
      </Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}
