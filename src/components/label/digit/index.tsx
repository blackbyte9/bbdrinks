import React from 'react';
import { Input } from '@/components/ui/input';
import InputProps from '../props';

export const DigitInput: React.FC<InputProps> = ({
    onClick,
    disabled = false,
    className = '',
    ariaLabel = 'Item count',
    value = '',
    onChange,
}) => {
    return (
        <Input
            onClick={onClick}
            disabled={disabled}
            className={`digit-input ${className} text-yellow-500 bg-zinc-700 hover:bg-zinc-600 px-2 py-1 text-center w-16 font-bold`}
            aria-label={ariaLabel}
            value={value}
            onChange={onChange}
        />
    );
};

export default DigitInput;
