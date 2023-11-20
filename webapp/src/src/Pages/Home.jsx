import Form from "../components/Form"
import UpdateStockData from "../components/UpdateStockData"
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import Expenses from "../components/Expenses";
import Box from "@mui/material/Box";

export default function Home() {

    const getExpensesData = () => {
        return [
            { id: 1, description: 'Desc 1', amount: '2333' },
            { id: 2, description: 'Desc 1', amount: '2333' }
          ];  
    }

    const [expensesData, setExpensesData] = useState(getExpensesData);

    return (
        <div>
            <Box sx={{ padding: 2 }} >
                <h2>Saídas</h2>
            </Box>
            <Expenses />
        </div>
    );
}