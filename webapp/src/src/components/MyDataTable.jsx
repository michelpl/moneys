import * as React from 'react';
import { TextField, Paper, IconButton } from '@mui/material';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function MyDataTable({ data, childToParent}) {
    const [description, setDescription] = useState('');
    const [model] = React.useState(data);
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);

    const sumTotalAmount = (newList) => {
        var totalAmount = 0;
        newList.forEach(function (expense) {
            totalAmount += parseFloat(expense.amount);
        })
        setTotalAmount(totalAmount.toFixed(2));
        childToParent(
            {
                'model':  model.name,
                'amount': totalAmount
            }
        );

        localStorage.setItem(model.name + 'TotalAmount', JSON.stringify(totalAmount.toFixed(2)));
    }

    const getLocalStorage = () => {
        var localData = localStorage.getItem(model.name);

        if (localData) {
            sumTotalAmount(JSON.parse(localData));
            return JSON.parse(localData);
        }
        return [];
    }

    const [rows, setRows] = useState(getLocalStorage);

    const saveData = () => {
        const newItem = {
            'id': Math.floor(Math.random() * 100000000),
            'description': description,
            'amount': amount
        };
        let newList = [...rows, newItem];
        localStorage.setItem(model.name, JSON.stringify(newList));
        setRows(newList);
        sumTotalAmount(newList);
    };

    const deleteTodo = (id) => {
        console.log(id);
        const filtered = rows.filter((item) => item.id !== id);
        setRows(filtered);
        localStorage.setItem(model.name, JSON.stringify(filtered));
        sumTotalAmount(filtered);
    };

    return (
        <TableContainer component={Paper} sx={{ marginBottom: 10 }}>
            <h3>{model.label}</h3>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Descrição</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, order) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="left">{order + 1}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="right">R$ {row.amount}</TableCell>
                            <TableCell align="right">
                                <Tooltip title="Delete">
                                    <IconButton aria-label="delete"
                                        edge="end" onClick={() => deleteTodo(row.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div id='botomActions'
                align="left"
                style={{ padding: '5px', marginTop: '15px' }}
            >
                <TextField
                    align="left"
                    type="text"
                    id="description"
                    label="Descrição"
                    minRows="550"
                    onChange={
                        (e) => { setDescription(e.target.value); }
                    }
                >
                </TextField>
                <TextField
                    style={{ marginLeft: '15px' }}
                    id="amount"
                    type="number"
                    min="0.00"
                    label="Valor"
                    onChange={
                        (e) => { setAmount(parseFloat(e.target.value).toFixed(2)); }
                    }
                    onKeyUp={
                        (e) => {
                            if (e.key === "Enter") {
                                saveData()
                            }
                        }
                    }
                >
                </TextField>
                <Card sx={{ width: '100%', marginTop: '15px' }} >
                    <CardContent className='bottomCard'>
                        <p className='p1'>Total: R$ { totalAmount }</p>
                        <p className='p2'>Número de registros: { rows.length }</p>
                    </CardContent>
                </Card>
            </div>
        </TableContainer>
    );
}                    