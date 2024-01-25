import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, List, Typography } from '@mui/material';
import TransactionList from '../components/Transaction/TransactionList';

export default function MonthlyBudgetControl_BKP() {

  //const apiUrl = 'http://3.88.14.53:8000/api/v1';
  const apiUrl = 'http://localhost:8000/api/v1';
  const [userTransactions, setUserTransactions] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const userSession = { user_id: 1 };
  
  const sumTotalAmount = (data) => {
    var amount = 0
   
    data.map((item, order) => {
      if (item.amount === undefined || item.amount === '' || !item.amount) {
        item.amount = 0;
      }
      if (item.model=== 'budget') {
          amount += parseFloat(item.amount);
      }
      if (item.model=== 'expenses') {
        amount -= parseFloat(item.amount);
    }
  });
    setTotalAmount(amount);
  }

  useEffect(() => {
    var uri = apiUrl + '/transaction/' + userSession.user_id + '/' + parseInt(2024) + '/' + parseInt(1);
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setToggle(false);
        setUserTransactions(data);
        sumTotalAmount(data);
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
          <TransactionList sumTotalAmount={ sumTotalAmount } transactions={userTransactions} model={{ label: 'Entradas', name: 'budget' }} toggle={toggle} />
        </Grid>

        <Grid xs={3}>
          <Card>
            <CardHeader title="Coluna 2"></CardHeader>
            <CardContent>
              <ul>
                <li>Próximos vencimentos</li>
                <li>Transaçoões com vencimento atrasado</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <TransactionList sumTotalAmount={ sumTotalAmount } transactions={userTransactions} model={{ label: 'Saídas', name: 'expenses' }} toggle={toggle} />
          { totalAmount }
        </Grid>
        <Grid xs={12}>

        </Grid>
      </Grid>
    </Box>
  );
}
