import * as React from 'react';
import { Box, Card, CardActions, CardContent, Grid, List, Typography } from '@mui/material';
import TransactionListItem from './TransactionListItem';
import TransactionListItemSkeleton from './TransactionListItemSkeleton';
import TransactionActions from './TransactionActions';
import { itemModel } from '../../models/ItemModel';
import { deleteTransaction } from '../../actions/TransactionFormActions';
import { sumTotalAmount as BudgetTotalAmount } from '../../actions/HandleTransactions';

export default function TransactionList({ transactions, model, sumTotalAmount, toggle, date }) {

    const [list, setList] = React.useState([]);
    const [finalBudget, setFinalBudget] = React.useState(0);

    function handleTransactions(transaction) {
        var modelTotal = 0;
        var newList = list;
        
        if (transaction.amount === undefined || 
            transaction.amount === '' || 
            !transaction.amount
        ) {
            transaction.amount = 0;
        }

        newList.map((item, order) => {
            if (item.model === model.name) {
                modelTotal += parseFloat(item.amount);
            }
            if (item._id === transaction._id) {
                newList[order] = transaction;
                return;
            }
        });
        console.log(modelTotal);
        setList(newList);
        setFinalBudget(modelTotal);
        sumTotalAmount(newList);
    }

    React.useEffect(() => {
        if (transactions.length > 0) {
            setList(transactions);
            setFinalBudget(BudgetTotalAmount(transactions, model));
        }
    }, [transactions]);

    const addItem = () => {
        setList([...list, itemModel(model.name)]);
    }

    const deleteListItem = (removedItemId) => {
        const filtered = list.filter((item) => {
            if (item._id !== removedItemId) {
                return true;
            }
            return false;

        });
        setList(filtered);
    }

    const handleListActions = (action, value) => {
        switch (action) {
            case "deleteItem":
                deleteTransaction(value);
                deleteListItem(value);
                break;
            case 'add':
                addItem();
                break;
            default:
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

    function MessageContainer() {
        if (list.length === 0) {
            return <Typography variant={'h6'}>Adicione uma transação</Typography>
        }
    }

    return (
        <>
            <Box>
                <Card>
                    <CardContent sx={{ backgroundColor: 'background.paper' }}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom component="div">
                                <h2>{model.label}</h2>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List spacing={6} sx={{ padding: 0, width: '100%' }}>
                                <LoadingContainer />
                                <MessageContainer />
                                <>
                                    {
                                        list.map((transaction, order) => {
                                            if (transaction.model === model.name) {
                                                return (
                                                    <TransactionListItem
                                                        key={order}
                                                        handleListActions={handleListActions}
                                                        transactionData={transaction}
                                                        model={model}
                                                        handleTransactions={handleTransactions}
                                                        date={date}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </>

                            </List>
                        </Grid>

                    </CardContent>
                    <CardActions sx={{ padding: 2 }}>
                        <TransactionActions model={model} finalBudget={finalBudget} handleListActions={ handleListActions } />
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

