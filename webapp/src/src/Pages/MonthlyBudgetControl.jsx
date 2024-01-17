import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, CardActions, CardContent, List, Typography } from '@mui/material';
import TransactionListItem from '../components/Transaction/TransactionListItem';
import TransactionListItemSkeleton from '../components/Transaction/TransactionListItemSkeleton';
import TransactionList from '../components/Transaction/TransactionList';

export default function MonthlyBudgetControl() {

  //const apiUrl = 'http://3.88.14.53:8000/api/v1';
  const apiUrl = 'http://localhost:8000/api/v1';
  const [userTransactions, setUserTransactions] = useState([]);
  const [toggle, setToggle] = useState(true);

  const userSession = { user_id: 1};

  useEffect(() => {
    var uri = apiUrl + '/transaction/' + userSession.user_id + '/' + parseInt(2024) + '/' + parseInt(1);
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

  return (
    <Box marginTop={5} padding={1}>
      <Grid container spacing={1} columns={12}>
        <Grid xs={12}>
          <Typography variant='H2'>Controle de orçamento mensal</Typography>
        </Grid>
        <Grid xs={12} sm={8}>
          <TransactionList transactions={userTransactions} model={{label: 'Entradas', name: 'budget'}} toggle={toggle} />
        </Grid>
        
        <Grid xs={3}>
          <Card>COLUNA 2</Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <TransactionList transactions={userTransactions} model={{label: 'Saídas', name: 'expenses'}} toggle={toggle} />
        </Grid>
      </Grid>
    </Box>
  );
}
