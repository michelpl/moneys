import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, CardActions, CardContent, CardHeader, List, Typography } from '@mui/material';
import TransactionList from '../components/Transaction/TransactionList';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SendIcon from '@mui/icons-material/Send';
import { NumericFormat } from "react-number-format";
import Totals from "../components/Totals";
import BudgetControl from "../components/BudgetControl";
import { useParams, useSearchParams } from 'react-router-dom';


export default function MonthlyBudgetControl() {
  const GetYearAndMont = () => {
    const location = useParams();
    return location;
  }
  return (
    <BudgetControl  yearAndMonth={GetYearAndMont()} />
  );
}
