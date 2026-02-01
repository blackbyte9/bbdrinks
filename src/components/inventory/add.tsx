"use client";

import AddButton from "../button/add";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { createInventory } from "@/lib/inventory/create";
import React from "react";
import { useInventory } from "@/contexts/InventoryContext";

export interface Props {
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

export const AddInventory: React.FC<Props> = ({
    disabled = false,
    className = '',
    ariaLabel = 'Add inventory',
}) => {
    const { setInventoryId } = useInventory();
    return (
        <Dialog>
            <DialogTrigger asChild><AddButton
                className={`add-inventory-button ${className}`}
                disabled={disabled}
                aria-label={ariaLabel}
            /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Neues Inventar</DialogTitle>
                    <DialogDescription>
                        Neues Inventar anlegen
                    </DialogDescription>
                </DialogHeader>
                <form id="add-inventory-form" className="mt-4 mb-8" onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const inventoryDate = formData.get('inventory-date') as string;
                    const inventory = await createInventory(new Date(inventoryDate));
                    if (inventory?.id) {
                        setInventoryId(inventory.id);
                    }

                    window.location.reload();
                }}>
                    <Label htmlFor="inventory-date">Date</Label>
                    <Input type="date" id="inventory-date" name="inventory-date" className="w-full mt-1 mb-4 p-2 border border-gray-300 rounded" />
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" form="add-inventory-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
export default AddInventory;
