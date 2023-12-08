import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

export default function Month() {
  const [month] = useState({
    id: 12,
    label: 'Dezembro'
  });
  const [user] = useState(
    {
      id: 1,
      name: 'Michel'
    }
  );
  const [year] = useState('2023');
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const totalAmountToParent = (totalAmount) => {
    if (totalAmount.model === 'budget') {
      setBudget(totalAmount.amount);
    }
    if (totalAmount.model === 'expenses') {
      setExpenses(totalAmount.amount);
    }
  }

  useEffect(() => {
    document.title = 'Moneys | ' + month.label;
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <RequestPageIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Moneys | Home
          </Typography>
        </Toolbar>
      </AppBar>


      <Container maxWidth="99%" sx={{ marginTop: 5 }}>
        <MyDataTable
          data={
            {
              modelName: 'budget',
              modelLabel: 'Entradas',
              userId: user.id,
              year: year,
              month: month.id
            }
          }
          totalAmountToParent={totalAmountToParent}
        />
        <MyDataTable
          data={
            {
              modelName: 'expenses',
              modelLabel: 'Saídas',
              userId: user.id,
              year: year,
              month: month.id
            }
          }
          totalAmountToParent={totalAmountToParent}
        />
        <Totals budget={budget} expenses={expenses} />
      </Container>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}


    </ThemeProvider>
  );
}