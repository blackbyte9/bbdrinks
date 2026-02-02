"use server";

import { prisma } from '@/lib/prisma';
import { Shoppinglist } from '../prisma/client';

export async function getShoppinglist(): Promise<Shoppinglist[]> {
    const shoppinglist = await prisma.shoppinglist.findMany();
    return shoppinglist;
};
