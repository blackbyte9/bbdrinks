import { Button } from '@/components/ui/button';
import React from 'react';
import { Plus } from 'lucide-react';
import ButtonProps from '../props';

export const PlusButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Add item',
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`plus-button ${className} text-green-500 bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <Plus />
        </Button>
    );
};

export default PlusButton;
