import * as React from 'react';
import Container from '@mui/material/Container';
import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import { useState } from "react";
import { useParams } from 'react-router-dom';

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
  const [budget, setBudget] = useState(0);
  const [tithe, setTithe] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budgetWithoutDiscounts, setBudgetWithoutDiscounts] = useState(0);


  function HeaderView(model) {
    const location = useParams();
    const filtered = months.filter((item) => item.id == location.month); 
    document.title = 'Moneys';
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
    if (totalAmount.model === 'tithe') {
      setTithe(totalAmount.amount);
    }
    if (totalAmount.model === 'expenses') {
      setExpenses(totalAmount.amount);
    }
    if (totalAmount.model === 'busget-without-discounts') {
      setBudgetWithoutDiscounts(totalAmount.amount);
    }
  }
  return (
    <Container maxWidth="99%" sx={{ marginTop: 5 }}>
      <MyDataTable
        data={ HeaderView({name: 'budget', label: 'Entradas' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <MyDataTable
        data={ HeaderView({name: 'budget-without-discounts', label: 'Entradas sem descontos' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <MyDataTable
        data={ HeaderView({name: 'tithe', label: 'Dízimos e ofertas' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <MyDataTable
        data={ HeaderView({name: 'expenses', label: 'Saídas' }) }
        totalAmountToParent={totalAmountToParent}
      />
      <Totals budget={budget} expenses={expenses} tithe={ tithe }  budgetWithoutDiscounts={ budgetWithoutDiscounts } />
    </Container>
  );
}