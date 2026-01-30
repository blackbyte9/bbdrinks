"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInventory } from '@/contexts/InventoryContext';
import { Inventory } from '@/lib/prisma/client';
import React from 'react';

export interface InventoryProps {
    className?: string;
};

export const InventoryCard: React.FC<InventoryProps> = ({
    className = '',
}) => {
    const { inventoryId } = useInventory();
    const [inventory, setInventory] = React.useState<Inventory | null>(null);
    React.useEffect(() => {
        if (inventoryId) {
            import('@/lib/inventory/read').then(({ getInventorybyId }) => {
                getInventorybyId(inventoryId).then(inv => {
                    setInventory(inv);
                });
            });
        }
    }, [inventoryId]);
    return (
        <Card className={`data-card ${className} `} >
            <CardHeader>
                <CardTitle className={`text-lg font-thin`}>Inventur</CardTitle>
            </CardHeader>
            <CardContent className={`flex gap-4 justify-center`}>
                <h1>Inventur {inventory?.date.toLocaleDateString()}</h1>
            </CardContent>
        </Card>
    );
};

export default InventoryCard;
