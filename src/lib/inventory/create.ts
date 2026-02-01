"use server";

import { prisma } from '@/lib/prisma';
import { Inventory } from '../prisma/client';

export async function createInventory(inventoryDate: Date): Promise<Inventory | null> {

    return await prisma.inventory.create({
        data: { date: inventoryDate },
    });
}
