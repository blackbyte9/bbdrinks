import { Button } from '@/components/ui/button';
import React from 'react';
import { Minus } from 'lucide-react';
import ButtonProps from '../props';

export const MinusButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Remove item',
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`minus-button ${className} text-red-500 bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <Minus />
        </Button>
    );
};

export default MinusButton;
