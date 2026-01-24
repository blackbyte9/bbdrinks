
import ItemCard from "@/components/card/item";
import { getItems } from "@/lib/article/read";

export default async function Home() {
  const data = await getItems();
  return (
    <div>
      {data.map(item => (
        <ItemCard key={item.id} name={item.name} className="mb-8" />
      ))}
    </div>
  );
}
