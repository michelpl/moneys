import * as React from 'react';
import { Box, Card, CardActions, CardContent, Grid, List, Typography } from '@mui/material';
import TransactionListItem from './TransactionListItem';
import TransactionListItemSkeleton from './TransactionListItemSkeleton';
import TransactionActions from './TransactionActions';
import {v4 as uuid} from 'uuid';

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
        console.log(model);
        let item = {
            _id: uuid(),
            user_id: 1,
            description: "",
            model: model.name,
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
        console.log(filtered)
        setList(filtered);
    }

    const handleListActions = (action, value) => {

        switch (action) {
            case "deleteItem":
                deleteData(value);
                deleteListItem(value);
                break;
            case 'add':
                console.log('add')
                addItem();
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
                                            if (transaction.model === model.name) {
                                                return <TransactionListItem key={order} handleListActions={handleListActions} transactionData={transaction} model={model} />
                                            }

                                        })
                                    }
                                </>

                            </List>
                        </Grid>

                    </CardContent>

                    <CardActions sx={{ padding: 2 }}>
                        <TransactionActions model={model} totalAmount={totalAmount} handleListActions={handleListActions} />
                    </CardActions>
                </Card>

            </Box>
        </>
    );
}

