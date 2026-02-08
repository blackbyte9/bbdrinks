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
import { createShoppingItem } from "@/lib/shoppinglist/create";

export interface Props {
    user: string;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

export const AddItem: React.FC<Props> = ({
    user,
    disabled = false,
    className = '',
    ariaLabel = 'Add item',
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild><AddButton
                className={`add-item-button ${className}`}
                disabled={disabled}
                aria-label={ariaLabel}
            /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Neuer Artikel</DialogTitle>
                    <DialogDescription>
                        Neuen Einkaufsartikel anlegen
                    </DialogDescription>
                </DialogHeader>
                <form id="add-item-form" className="mt-4 mb-8" onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const itemName = formData.get('item-name') as string;
                    const itemCount = Number(formData.get('item-count'));
                    await createShoppingItem(itemName, itemCount, user);
                    window.location.reload();
                }}>
                    <Label htmlFor="item-name">Name</Label>
                    <Input type="text" id="item-name" name="item-name" className="w-full mt-1 mb-4 p-2 border border-gray-300 rounded" />
                    <Label htmlFor="item-name">Anzahl</Label>
                    <Input type="text" id="item-count" name="item-count" className="w-full mt-1 mb-4 p-2 border border-gray-300 rounded" />
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
export default AddItem;
