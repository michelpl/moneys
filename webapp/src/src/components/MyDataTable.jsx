import * as React from 'react';
import { Box } from '@mui/material/Box';
import { TextField, Paper, ListItem, ListItemText, Checkbox, ListItemIcon, ListItemButton, Divider, IconButton, List } from '@mui/material';
import { useState } from "react";

export default function MyDataTable({data}) {
    const [description, setDescription] = useState('');
    const [name, setName] = React.useState(data);
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);

    const sumTotalAmount = (newList) => {
        var totalAmount = 0;
        newList.forEach(function (expense) {
            totalAmount += parseFloat(expense.amount);
        })
        setTotalAmount(totalAmount.toFixed(2));
    }

    const getLocalStorage = () => {
        var localData = localStorage.getItem('expenses');

        if (localData) {
            sumTotalAmount(JSON.parse(localData));
            return JSON.parse(localData);
        }
        return [];
    }

    const [expenses, setExpenses] = useState(getLocalStorage);

    const saveExpenses = () => {
        const newItem = {
            'id': Math.floor(Math.random() * 100000000),
            'description': description,
            'amount': amount
        };
        let newList = [...expenses, newItem];
        localStorage.setItem("expenses", JSON.stringify(newList));
        setExpenses(newList);
        sumTotalAmount(newList);
    };

    const deleteTodo = (id) => {
        const filtered = expenses.filter((item) => item.id !== id);
        setExpenses(filtered);
        localStorage.setItem("expenses", JSON.stringify(filtered));
        sumTotalAmount(filtered);
    };

    return (
        <Paper style={{ padding: 15, alignContent: "center", verticalAlign: "center" }}>
            <h3>{name}</h3>
            <div>
                <List>
                    <ListItemButton>
                        <ListItemText sx={{ marginLeft: '15' }} primary={"Id"} />
                        <ListItemText sx={{ marginLeft: '15' }} primary={"Descrição"} />
                        <ListItemText sx={{ textAlign: 'right' }} primary={"Valor"} />
                        <ListItemText sx={{ textAlign: 'right' }} primary={"Ações"} />
                    </ListItemButton>
                    <Divider />
                    {
                        expenses.map((item, order) => (
                            <ListItem
                                key={item.id}
                                disablePadding
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(item.id)}>
                                        <p>Deletar</p>
                                    </IconButton>
                                }
                            >
                                <ListItemButton role={undefined}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': item.id }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={order + 1} primary={ order + 1} /> 
                                    <ListItemText 
                                        sx={{ textAlign: 'left' }}
                                        id={item.description} 
                                        primary={item.description} 
                                    />
                                    <ListItemText style={{ alignContent: "right" }} sx={{ marginLeft: '15' }} id={item.amount} primary={"R$ " + item.amount} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    <ListItem>
                        <ListItemButton role={undefined}>
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
                        </ListItemButton>
                    </ListItem>
                    <Paper>
                        <p>Total: R$ {totalAmount}</p>
                    </Paper>
                </List>
            </div>
        </Paper>
    );
}