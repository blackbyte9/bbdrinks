"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DigitInput from '@/components/label/digit';
import PlusButton from '@/components/button/plus';
import MinusButton from '@/components/button/minus';
import zod from 'zod';

export interface DataProps {
    name: string;
    className?: string;
    type: 'bottles' | 'cases' | 'opened';
};

export const DataCard: React.FC<DataProps> = ({
    name,
    className = '',
    type,
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
                        const numValue = type === 'opened' ? parseFloat(newValue.target.value) : Number(newValue.target.value);
                        if (type === 'opened') {
                            const result = zod.number().min(0).max(1).safeParse(numValue);
                            if (result.success) {
                                setValue(Math.floor(numValue));
                            }
                        } else {
                            setValue(numValue);
                        }
                        const result = zod.number().min(0).safeParse(numValue);
                        if (!result.success) {
                            setValue(0);
                        }
                    }}
                />
                <div className={`gap-2 flex justify-center`}>
                    <PlusButton
                        className={`${className}`}
                        onClick={() => {
                            const newValue = type === 'opened' ? value + 0.1 : value + 1;
                            if (type === 'opened' && newValue > 1) {
                                setValue(1);
                            } else {
                                setValue(newValue);
                            }
                        }} />
                    <MinusButton
                        className={`${className}`}
                        onClick={() => {
                            const newValue = type === 'opened' ? value - 0.1 : value - 1;
                            const result = zod.number().min(0).safeParse(newValue);
                            if (!result.success) {
                                setValue(0);
                            } else {
                                setValue(newValue);
                            }
                        }} />
                </div>
            </CardContent>
        </Card>
    );
};

export default DataCard;
