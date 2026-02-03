import AddItem from "@/components/shoppinglist/add";
import { getShoppinglist } from "@/lib/shoppinglist/read";

export default async function ShoppingList() {
    const data = await getShoppinglist();
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Einkaufsliste</h1>
            <AddItem />
            {data.map(item => (
                <div key={item.id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold">{item.name} - {item.count} (User: {item.user})   </h2>
                </div>
            ))}
        </div>
    );
}
