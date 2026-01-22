"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DigitInput from '@/components/label/digit';
import PlusButton from '@/components/button/plus';
import MinusButton from '@/components/button/minus';

export interface DataProps {
    name: string;
    className?: string;
};

export const DataCard: React.FC<DataProps> = ({
    name,
    className = '',
}) => {
    const [value, setValue] = useState(0);
    return (
        <Card className={`data-card ${className} py-1 w-60`} >
            <CardHeader>
                <CardTitle className={`text-lg font-thin`}>{name}</CardTitle>
            </CardHeader>
            <CardContent className={`text-center`}>
                <DigitInput
                    className={`${className}`}
                    value={String(value)}
                    onChange={(newValue) => {
                        setValue(Number(newValue.target.value));
                    }}
                />
                <div className={`gap-2 flex justify-center`}>
                    <PlusButton
                        className={`${className}`}
                        onClick={() => {
                            setValue(value + 1);
                        }} />
                    <MinusButton
                        className={`${className}`}
                        onClick={() => {
                            setValue(value - 1);
                        }} />
                </div>
            </CardContent>
        </Card>
    );
};

export default DataCard;
