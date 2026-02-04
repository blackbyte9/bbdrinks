import AddItem from "@/components/shoppinglist/add";
import { RemoveShoppingItem } from "@/components/shoppinglist/remove";
import { auth } from "@/lib/auth/";
import { getShoppinglist } from "@/lib/shoppinglist/read";
import { redirect } from "next/dist/client/components/navigation";
import { headers } from "next/headers";

export default async function ShoppingList() {
    const requestHeaders = await headers();

    const session = await auth.api.getSession({
        headers: requestHeaders,
    });
    if (!session) {
        redirect("/auth/sign-in");
    }

    const data = await getShoppinglist();
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Einkaufsliste</h1>
            <AddItem />
            {data.map(item => (
                <div key={item.id} className="mb-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold">{item.name} - {item.count} (User: {item.user})   </h2>
                    <RemoveShoppingItem itemId={item.id} />
                </div>
            ))}
        </div>
    );
}
