import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Totals({ budget, expenses, tithe,  budgetWithoutDiscounts }) {
    return (
        <Card sx={{ width: '100%', marginTop: '15px' }} >
            <CardContent className='bottomCard'>
                <p className='p1'>Saldo total: R$ {(budget + budgetWithoutDiscounts - tithe - expenses).toFixed(2)}</p>
            </CardContent>
        </Card>
    );
}                    