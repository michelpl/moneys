import * as React from 'react';
import { List } from '@mui/material';
import TransactionListItem from './TransactionListItem';

export default function TransactionList({ transactions, model }) {
    return (
        <>
            <List spacing={6} sx={{ padding: 0, width: '100%' }}>
                {transactions.map((transaction, order) => (
                    <TransactionListItem />
                ))}
            </List>
        </>
    );
}

