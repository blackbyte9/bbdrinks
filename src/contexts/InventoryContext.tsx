'use client';

import { getInventoryLatest } from '@/lib/inventory/read';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InventoryContextType {
    inventoryId: number | null;
    setInventoryId: (id: number | null) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [inventoryId, setInventoryId] = useState<number | null>(null);

    return (
        <InventoryContext.Provider value={{ inventoryId, setInventoryId }}>
            {children}
        </InventoryContext.Provider>
    );
};

export const useInventory = () => {
    const context = useContext(InventoryContext);
    if (context === undefined) {
        throw new Error('useInventory must be used within an InventoryProvider');
    }
    return context;
};
