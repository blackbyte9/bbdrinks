"use client";
import InventoryCard from "@/components/card/inventory";
import ItemCard from "@/components/card/item";
import AddItem from "@/components/item/add";
import { useInventory } from "@/contexts/InventoryContext";
import { authClient } from "@/lib/auth/client";
import { getItems } from "@/lib/item/read";
import { Loader2 } from "lucide-react";
import React from "react";

export default function InventoryPage({ params }: { params: Promise<{ id: string }> }) {
  const [data, setData] = React.useState<{ name: string; id: number; createdAt: Date; updatedAt: Date; }[]>([]);
  const {
    data: session,
    isPending: isSessionLoading,
  } = authClient.useSession();

  React.useEffect(() => {
    if (!session && !isSessionLoading) {
      window.location.href = "/auth/sign-in";
    }
  }, [session, isSessionLoading]);
  React.useEffect(() => {
    getItems().then(setData);
  }, []);
  const { inventoryId, setInventoryId } = useInventory();

  const { id } = React.use(params);
  React.useEffect(() => {
    setInventoryId(parseInt(id));
  }, [id, setInventoryId]);

  if (isSessionLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <InventoryCard />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold underline">Inventur {inventoryId}</h1>
          <AddItem />
          {data.map(item => (
            <ItemCard key={item.id} item={item} className="mb-8" />
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
