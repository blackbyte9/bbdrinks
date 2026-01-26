
import ItemCard from "@/components/card/item";
import AddItem from "@/components/item/add";
import { getItems } from "@/lib/item/read";

export default async function Home() {
  const data = await getItems();
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold underline">Items</h1>
        <AddItem />
      </div>
      {data.map(item => (
        <ItemCard key={item.id} item={item} className="mb-8" />
      ))}
    </div>
  );
}
