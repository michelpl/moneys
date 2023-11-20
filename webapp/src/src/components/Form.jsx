import { Alert, Button, Link, ListSubheader, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Form() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const [count, setCount] = React.useState(0);

    const getFiis = async () => {
        console.log(2222)
    }

    const mapFiis = async (result) => {
        let newList = [];

        result.map((row) => {
            newList.push({ label: row.slug, id: row.id, fiiClass: row.class })
        });

        setList(newList);
        return newList;
    }

    const [list, setList] = useState(getFiis);
    const [inputValue, setInputValue] = React.useState('');
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
        var counter = count
        setCount(counter - 1)
        localStorage.setItem("expenses", JSON.stringify(filtered));
        sumTotalAmount(filtered);
    };

    const deleteAll = () => {
        setExpenses([]);
        setTotalAmount(0);
        localStorage.setItem("expenses", JSON.stringify([]));
    };

    return (
        <Paper style={{ padding: 15, alignContent: "center", verticalAlign: "center" }}>
            <div>
                <List>
                    <ListItemButton>
                        <ListItemText sx={{ marginLeft: '15' }} primary={"ID"} />
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
                                        <DeleteIcon />
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
                                    <ListItemText sx={{ marginLeft: '15' }} id={order} primary={order} />
                                    <ListItemText sx={{ marginLeft: '15' }} id={item.description} primary={item.description} />
                                    <ListItemText style={{ alignContent: "right" }} sx={{ marginLeft: '15' }} id={item.amount} primary={"R$ " + item.amount} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    <ListItem>
                        <ListItemButton role={undefined}>
                            <ListItemText sx={{ marginLeft: '15' }} />
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
                            <ListItemText style={{ alignContent: "right" }} sx={{ marginLeft: '15' }} primary="TESTE" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

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
                    </ListItem>
                    <Paper>
                        <p>Valor das saídas: R$ {totalAmount}</p>
                    </Paper>
                </List>
            </div>
        </Paper>
    );
}



