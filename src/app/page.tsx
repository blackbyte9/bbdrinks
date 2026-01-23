
import ItemCard from "@/components/card/item";

export default function Home() {
  return (
    <div>
      <ItemCard name="Helles" className="mb-8" />
      <ItemCard name="Weizen" className="mb-8" />
      <ItemCard name="Dunkles" className="mb-8" />
      <ItemCard name="Alkoholfrei" className="mb-8" />
    </div>
  );
}
