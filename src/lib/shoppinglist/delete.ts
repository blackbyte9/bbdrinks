"use server";

import { prisma } from '@/lib/prisma';

export async function deleteShoppingItem(id: number) {

    await prisma.shoppinglist.delete({
        where: { id: id },
    });
}
