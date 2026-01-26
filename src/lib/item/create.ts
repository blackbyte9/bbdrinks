"use server";

import { prisma } from '@/lib/prisma';
import { Item } from '../prisma/client';

export async function createItem(itemName: string): Promise<Item | null> {

    return await prisma.item.create({
        data: { name: itemName },
    });
}
