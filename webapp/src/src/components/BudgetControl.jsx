import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import TransactionList from '../components/Transaction/TransactionList';
import Totals from "../components/Totals";
import { updateTransactionList as getNewList, sumTotalAmountByModel } from "../actions/HandleTransactions";
import { budgetControlModelList } from "../models/BudgetControlModelList";

export default function BudgetControl({ date }) {
  const apiUrl = 'http://localhost:8000/api/v1';
  const [userTransactions, setUserTransactions] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const userSession = { user_id: 1 };

  const updateTransactionList = (transactions) => {
    var newList = getNewList(userTransactions, transactions);
    setUserTransactions(newList);
    sumTotalAmount(newList);
  }

  const sumTotalAmount = (transactionList) => {
    setTotalAmount(sumTotalAmountByModel(transactionList));
  }

  useEffect(() => {
    var uri = apiUrl + '/transaction/' + userSession.user_id + '/' + parseInt(date.year) + '/' + parseInt(date.month);
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setToggle(false);
        setUserTransactions(data);
        sumTotalAmount(data);
        sumTotalAmountByModel(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box marginTop={5} padding={1}>
      <Grid container spacing={1} columns={12} rowSpacing={3}>
        <Grid xs={12}>
          <Typography variant='H2'>Controle de orçamento mensal</Typography>
        </Grid>
        <Grid container xs={12} sm={9}>
          
          <>
            {
              budgetControlModelList.map((model, order) => {
                if (true) {
                  return (
                    <Grid xs={12} key={ model.name }>
                      <TransactionList
                        sumTotalAmount={updateTransactionList}
                        transactions={userTransactions}
                        model={ model }
                        toggle={toggle}
                        date={date}
                      />
                    </Grid>
                  )
                }
              })
            }
          </>
          <Grid xs={12}>
            <Totals label={'Previsão de saldo no fim do mês'} total={totalAmount} />
          </Grid>
        </Grid>
        <Grid xs={3}>
          <Card>
            <CardHeader title="Coluna 2"></CardHeader>
            <CardContent>
              <ul>
                <li>Próximos vencimentos</li>
                <li>Transações com vencimento atrasado</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box >
  );
}
