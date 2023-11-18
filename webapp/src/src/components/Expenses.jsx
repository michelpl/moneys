import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { Image } from "@mui/icons-material";
import MyDataTable2 from './MyDataTable2.jsx';
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
        var id = rows.length + 1;
        const newItem = {
            'id': id,
            'description': description,
            'amount': amount
        };
        let newList = [...rows, newItem];
        localStorage.setItem("rows", JSON.stringify(newList));

        setRows(newList);
        //sumTotalAmount(newList);
    };

    const randomRole = () => {
        return ['Market'];
    };

    const randomCreatedDate = () => {
        return new Date();
    };
    
    const initialRows = [
        {
            id: 123,
            name: "wsdfsdfsdf",
            age: 25,
            joinDate: randomCreatedDate(),
            role: randomRole(),
        },
        {
            id: 456,
            name: "wsdfsdfsdf",
            age: 36,
            joinDate: randomCreatedDate(),
            role: randomRole(),
        },
        {
            id: 3345,
            name: "wsdfsdfsdf",
            age: 19,
            joinDate: randomCreatedDate(),
            role: randomRole(),
        },

    ];
    return (
        <div>
            <MyDataTable2 
                initialRows={initialRows}
                model={'expenses'}
             />
        </div>
    );
}