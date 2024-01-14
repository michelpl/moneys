import * as React from 'react';
import { Box, Card, CardActions, CardContent, Grid, List, Typography } from '@mui/material';
import TransactionListItem from './TransactionListItem';
import TransactionListItemSkeleton from './TransactionListItemSkeleton';
import TransactionActions from './TransactionActions';

const apiUrl = 'http://3.88.14.53:8000/api/v1';

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
            description: "",
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
        list.map((transaction) => 
            transaction += transaction.amount
        )
        return total;
    });

    const deleteData = async (transactionId) => {
        let uri = apiUrl + '/transaction/' + transactionId;
        fetch(uri, {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((data) => {

            })
            .catch((err) => {
                console.log('Não foi possível deletar a transação | ', err.message);
            });
    }

    const deleteListItem = (removedItemId) => {

        const filtered = list.filter((item) => {
            if (item._id != removedItemId) {
                return true;
            }
            return false;

        });
        setList(filtered);
    }

    const handleClick = (action) => {
        if (action === 'add') {
            addItem();
        }
    }

    const handleListActions = (action, value) => {
        switch (action) {
            case "deleteItem":
                deleteListItem(value);
                deleteData(value);
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
                                                return <TransactionListItem key={order} handleListActions={handleListActions} transactionData={transaction} model={model} />
                                            }

                                        })
                                    }
                                </>

                            </List>
                        </Grid>

                    </CardContent>

                    <CardActions sx={{ padding: 2 }}>
                        <TransactionActions model={model} totalAmount={totalAmount} handleListActions={handleListActions} handleClick={handleClick} />
                    </CardActions>
                </Card>

            </Box>
        </>
    );
}

