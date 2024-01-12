import * as React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, Divider, Grid, List, Typography } from '@mui/material';
import TransactionListItem from './TransactionListItem';
import TransactionListItemSkeleton from './TransactionListItemSkeleton';
import BottomActions from './Form/BottomActions';
import TransactionActions from './TransactionActions';

export default function TransactionList({ transactions, model }) {

    const [list, setList] = React.useState([])
    const [toggle, setToggle] = React.useState(true)

    React.useEffect(() => {
        if (transactions.length > 0) {
            setList(transactions);
            setToggle(false);
        }
    }, [transactions,]);

    const addItem = () => {
        let item = {
            user_id: 1,
            description : "",
            model: "budget",
            amount: 0,
            paid_amount: 0,
            categories: []
        }

        let newList = [...list, item];

        setList(newList);
    }

    const totalAmount = React.useState(() => {
        var total = 0;
        list.map((transaction) => {
            transaction += transaction.amount;
        })
        return total;
    })

    const handleClick = (action) => {
        if (action === 'add') {
            addItem();
        }
    }

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

    return (
        <>
            <Box>
                <Card>
                    <CardContent sx={{ backgroundColor: 'background.paper' }}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                                <h2>{model.label}</h2>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List spacing={6} sx={{ padding: 0, width: '100%' }}>
                                <LoadingContainer />
                                <>
                                    {

                                        list.map((transaction, order) => {
                                            if (transaction.model == model.name) {
                                                return <TransactionListItem key={order} transactionData={transaction} model={model} />
                                            }

                                        })
                                    }
                                </>

                            </List>
                        </Grid>

                    </CardContent>

                    <CardActions sx={{ padding: 2 }}>
                        <TransactionActions model={model} totalAmount={totalAmount} handleClick={handleClick} />
                    </CardActions>
                </Card>

            </Box>
        </>
    );
}

