

import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import { useState, useEffect } from "react";
import MyTopBar from '../components/MyTopBar'
import { Box } from "@mui/material";

export default function Home() {
  const [month] = useState('Dezembro');
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
    document.title = 'Moneys | ' + month;
  });

  return (
    <Box>
      <MyTopBar currentMonth={month} currentYear={year} />
      <MyDataTable
        data={
          {
            modelName: 'budget',
            modelLabel: 'Entradas',
          }
        }
        totalAmountToParent={totalAmountToParent}
      />
      <MyDataTable
        data={
          {
            modelName: 'expenses',
            modelLabel: 'EnSaídastradas',
          }
        }
        totalAmountToParent={totalAmountToParent}
      />
      <Totals budget={budget} expenses={expenses} />
    </Box>
  );
}