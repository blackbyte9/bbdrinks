"use client";

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
import React from "react";
import { Item } from "@/lib/prisma/client";
import { updateItem } from "@/lib/item/update";
import EditButton from "../button/edit";

export interface Props {
    item: Item;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

export const EditItem: React.FC<Props> = ({
    item,
    disabled = false,
    className = '',
    ariaLabel = 'Edit item',
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild><EditButton
                className={`add-item-button ${className}`}
                disabled={disabled}
                aria-label={ariaLabel}
            /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Artikel bearbeiten</DialogTitle>
                    <DialogDescription>
                        Artikel bearbeiten
                    </DialogDescription>
                </DialogHeader>
                <form id="add-item-form" className="mt-4 mb-8" onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const itemName = formData.get('item-name') as string;
                    await updateItem(itemName, item.id);
                    window.location.reload();
                }}>
                    <Label htmlFor="item-name">Name</Label>
                    <Input type="text" id="item-name" name="item-name" defaultValue={item.name} className="w-full mt-1 mb-4 p-2 border border-gray-300 rounded" />
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" form="add-item-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
export default EditItem;
