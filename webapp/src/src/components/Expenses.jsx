import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { Image } from "@mui/icons-material";
import MyDataTable from './MyDataTable';
import { ButtonBase, TextField } from '@mui/material';


export default function Expenses() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);

    const sumTotalAmount = (newList) => {
        console.log(newList);
        var totalAmount = 0;
        newList.forEach(function (expense) {
            totalAmount += parseFloat(expense.amount);
        })
        console.log("TOTAL AMOUNT: " + totalAmount);
        setTotalAmount(totalAmount.toFixed(2));
    }
    

    const getLocalStorage = () => {
        var localData = localStorage.getItem('rows');
        if (localData) {
            sumTotalAmount(JSON.parse(localData));
            return JSON.parse(localData);
        }
        return [];
    }

    const [rows, setRows] = useState(getLocalStorage);

    const saveExpenses = () => {
        const newItem = {
            'id': Math.floor(Math.random() * 100000000),
            'description': description,
            'amount': amount
        };
        let newList = [...rows, newItem];
        localStorage.setItem("rows", JSON.stringify(newList));

        setRows(newList);
        //sumTotalAmount(newList);
    };

    const deleteAll = () => {
        setRows([]);
        setTotalAmount(0);
        localStorage.setItem("rows", JSON.stringify([]));
    };

    return (

        <div>
            <MyDataTable rows={rows} />
            <Box minHeight={300} sx={{ width: '100%', backgroundColor: 'white' }} >
                <TextField
                    type="text"
                    sx={{ marginLeft: '15' }}
                    id="description"
                    label="Descrição"
                    minRows="550"
                    onChange={
                        (e) => { setDescription(e.target.value); }
                    }
                >
                </TextField>
                <TextField
                    style={{ marginBottom: 10, marginLeft: 15 }}
                    id="amount"
                    type="number"
                    min="0.00"
                    label="Valor"
                    onChange={
                        (e) => { setAmount(parseFloat(e.target.value).toFixed(2)); }
                    }
                    onKeyUp={
                        (e) => {
                            if (e.key == "Enter") {
                                saveExpenses()
                            }
                        }
                    }
                >
                </TextField>
                <ButtonBase style={{backgroundColor: "red" }} onClick={deleteAll} >Deletar tudo</ButtonBase>
            </Box>
        </div>
    );
}