import { Button } from '@/components/ui/button';
import React from 'react';
import { FilePlus } from 'lucide-react';
import ButtonProps from '../props';

export const AddButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Add item',
}) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            disabled={disabled}
            className={`add-button ${className} bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <FilePlus /> Add
        </Button>
    );
};

export default AddButton;
