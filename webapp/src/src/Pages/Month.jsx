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

import { useParams } from 'react-router-dom';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});


export default function Month() {

  const months = [
    { id: 1, name: 'janeiro' },
    { id: 2, name: 'fevereiro' },
    { id: 3, name: 'março' },
    { id: 4, name: 'abril' },
    { id: 5, name: 'maio' },
    { id: 6, name: 'junho' },
    { id: 7, name: 'julho' },
    { id: 8, name: 'agosto' },
    { id: 9, name: 'setembro' },
    { id: 10, name: 'outubro' },
    { id: 11, name: 'novembro' },
    { id: 12, name: 'dezembro' }
  ]

  const [month, setMonth] = useState({
    id: 12,
    label: 'Dezembro'
  });
  const [user] = useState(
    {
      id: 1,
      name: 'Michel'
    }
  );
  const [year, setYear] = useState('2023');
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);


  function HeaderView(model) {
    const location = useParams();
    const filtered = months.filter((item) => item.id == location.month); 
    document.title = 'Moneys | ' + location.month ;
    var data = {
      modelName: model.name,
      modelLabel: model.label,
      userId: user.id,
      year: location.year,
      month: location.month
    }
    return data;
  }

  const totalAmountToParent = (totalAmount) => {
    if (totalAmount.model === 'budget') {
      setBudget(totalAmount.amount);
    }
    if (totalAmount.model === 'expenses') {
      setExpenses(totalAmount.amount);
    }
  }



  return (
    <Container maxWidth="99%" sx={{ marginTop: 5 }}>
      {

        
      }
      <MyDataTable
        data={ HeaderView({name: 'budget', label: 'Entradas' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <MyDataTable
        data={ HeaderView({name: 'expenses', label: 'Saídas' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <Totals budget={budget} expenses={expenses} />
    </Container>
  );
}