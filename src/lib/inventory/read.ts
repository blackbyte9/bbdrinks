"use server";

import { prisma } from '@/lib/prisma';
import { Inventory, InventoryStatus } from '../prisma/client';

export async function getInventory(): Promise<Inventory[]> {
    const inventory = await prisma.inventory.findMany();
    return inventory;
};

export async function getInventoryOpen(): Promise<Inventory[]> {
    const inventory = await prisma.inventory.findMany({
        where: { state: InventoryStatus.OPEN },
    });
    return inventory;
}

export async function getInventorybyId(id: number): Promise<Inventory | null> {
    const inventory = await prisma.inventory.findUnique({
        where: { id },
    });
    return inventory;
}

export async function getInventoryLatest(): Promise<Inventory | null> {
    const inventory = await prisma.inventory.findFirst(
        {
            orderBy: {
                date: 'desc'
            },
            where: {
                state: InventoryStatus.OPEN
            }
        }
    );

    return inventory;
}
