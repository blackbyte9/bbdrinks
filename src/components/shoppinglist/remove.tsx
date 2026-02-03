"use client";

import { deleteShoppingItem } from "@/lib/shoppinglist/delete";
import BoughtButton from "../button/bought";

export interface Props {
    itemId: number;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

export const RemoveShoppingItem: React.FC<Props> = ({
    itemId,
    disabled = false,
    className = '',
    ariaLabel = 'Remove item',
}) => {
    return (
        <BoughtButton
            className={`remove-item-button ${className}`}
            disabled={disabled}
            aria-label={ariaLabel}
            onClick={async () => {
                await deleteShoppingItem(itemId);
                window.location.reload();
            }}
        />
    );
};
