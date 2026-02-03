"use server";

import { prisma } from '@/lib/prisma';
import { Shoppinglist } from '../prisma/client';

export async function createShoppingItem(name: string, count: number, user: string): Promise<Shoppinglist | null> {

    return await prisma.shoppinglist.create({
        data: { name, count, user },
    });
}
