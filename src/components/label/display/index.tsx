import React from 'react';
import InputProps from '../props';
import { Label } from '@/components/ui/label';

export const TextOutput: React.FC<InputProps> = ({
    className = '',
    ariaLabel = 'Item',
    value = '',
}) => {
    return (
        <Label
            className={`text-output ${className} px-2 py-1 text-center w-32 text-gray-500`}
            aria-label={ariaLabel}
        >{value}</Label>
    );
};

export default TextOutput;
