import { Button } from '@/components/ui/button';
import React from 'react';
import { CheckIcon } from 'lucide-react';
import ButtonProps from '../props';

export const BoughtButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'gekauft',
}) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            disabled={disabled}
            className={`bought-button ${className} bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <CheckIcon /> Gekauft
        </Button>
    );
};

export default BoughtButton;
