"use client";
import InventoryCard from "@/components/card/inventory";
import ItemCard from "@/components/card/item";
import AddItem from "@/components/item/add";
import { useInventory } from "@/contexts/InventoryContext";
import { getItems } from "@/lib/item/read";
import React from "react";

export default function InventoryPage({ params }: { params: Promise<{ id: string }> }) {
  const [data, setData] = React.useState<{ name: string; id: number; createdAt: Date; updatedAt: Date; }[]>([]);

  React.useEffect(() => {
    getItems().then(setData);
  }, []);
  const { inventoryId, setInventoryId } = useInventory();

  const { id } = React.use(params);
  React.useEffect(() => {
    setInventoryId(parseInt(id));
  }, [id, setInventoryId]);
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
