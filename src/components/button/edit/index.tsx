import { Button } from '@/components/ui/button';
import React from 'react';
import { Pencil } from 'lucide-react';
import ButtonProps from '../props';

export const EditButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Edit item',
}) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            disabled={disabled}
            className={`edit-button ${className} bg-zinc-700 hover:bg-zinc-600`}
            aria-label={ariaLabel}
        >
            <Pencil /> Edit
        </Button>
    );
};

export default EditButton;
