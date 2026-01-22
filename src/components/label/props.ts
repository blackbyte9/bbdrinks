
import React from 'react';

export default interface InputProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // eslint-disable-next-line semi
};
