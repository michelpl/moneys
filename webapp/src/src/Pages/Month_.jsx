import MyDataTable from "../components/MyDataTable";
import Totals from "../components/Totals";
import {useEffect, useState} from "react";
import MyTopBar from '../components/MyTopBar'
import {Box} from "@mui/material";

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
        <Box  sx={{ width: '100%' }}>
            <MyTopBar currentMonth={month.label} currentYear={year} sx={{ width: '100%' }} />
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
            <Totals budget={budget} expenses={expenses}/>

        </Box>
    );
}