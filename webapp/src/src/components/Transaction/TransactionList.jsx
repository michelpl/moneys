import * as React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, Grid, List, Typography } from '@mui/material';
import TransactionListItem from './TransactionListItem';
import TransactionListItemSkeleton from './TransactionListItemSkeleton';
import BottomActions from './Form/BottomActions';
import TransactionActions from './TransactionActions';

export default function TransactionList({ transactions, model, toggle }) {
    function LoadingContainer() {
        if (toggle) {
            return <>
                <TransactionListItemSkeleton />
                <TransactionListItemSkeleton />
                <TransactionListItemSkeleton />
            </>
                ;
        }

        return null;
    }

    function RenderTransactions(param) {
        var filtered = transactions.filter((item) => {
            return item.model === param.filter
        });

        return (<>{
            filtered.map((transaction, order) => (
                <TransactionListItem key={order} transactionData={transaction} />
            ))
        }</>);
    }
    return (
        <>
            <Box>
                <Card>
                    <CardContent sx={{ backgroundColor: 'background.paper' }}>
                        <Grid xs={12}>
                            <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                                <h2>{model.label}</h2>
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <List spacing={6} sx={{ padding: 0, width: '100%' }}>
                                <LoadingContainer />
                                <RenderTransactions filter={model.name} />
                            </List>
                        </Grid>
                    <CardActions>
                        <TransactionActions />
                    </CardActions>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

