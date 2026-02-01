import { Button } from '@/components/ui/button';
import React from 'react';
import { FilePlus } from 'lucide-react';
import ButtonProps from '../props';

export const NewInvButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'New inventory',
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`new-inv-button ${className} text-green-500 bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <FilePlus /> New Inventory
        </Button>
    );
};

export default NewInvButton;
