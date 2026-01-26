"use server";

import { prisma } from '@/lib/prisma';
import { Item } from '../prisma/client';

export async function updateItem(itemName: string, id: number): Promise<Item | null> {

    return await prisma.item.update({
        where: { id },
        data: { name: itemName },
    });
}
