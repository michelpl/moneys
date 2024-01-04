import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, CardContent, List, Typography } from '@mui/material';
import TransactionListItem from '../components/Transaction/TransactionListItem';
import TransactionListItemSkeleton from '../components/Transaction/TransactionListItemSkeleton';

export default function MonthlyBudgetControl() {

  const apiUrl = 'http://3.88.14.53:8000/api';
  const [userTransactions, setUserTransactions] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    var uri = apiUrl + '/input?user_id=' + 1 + '&year=' + parseInt(2024) + '&month=' + parseInt(1);
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setToggle(false);
        setUserTransactions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
    var filtered = userTransactions.filter((item) => {
      return item.model === param.filter
    });

    return (<>{
      filtered.map((transaction, order) => (
        <TransactionListItem key={order} transactionData={transaction} />
      ))
    }</>);
  }

  return (
    <Box marginTop={5} padding={1}>
      <Grid container spacing={1} columns={12}>
        <Grid xs={12}>
          <Typography variant='H2'>Controle de orçamento mensal</Typography>
        </Grid>
        <Grid xs={12} sm={8}>
          <Box>
            <Card>
              <CardContent sx={{ backgroundColor: 'background.paper' }}>
                <Grid xs={12}>
                  <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                    <h2>Saídas</h2>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <List spacing={6} sx={{ padding: 0, width: '100%' }}>
                    <LoadingContainer />
                    <RenderTransactions filter={'budget'} />
                  </List>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid xs={3}>
          <Card>COLUNA 2</Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Box>
            <Card>
              <CardContent sx={{ backgroundColor: 'background.paper' }}>
                <Grid xs={12}>
                  <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                    <h2>Saídas</h2>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <LoadingContainer />
                  <RenderTransactions filter={'expenses'} />
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
