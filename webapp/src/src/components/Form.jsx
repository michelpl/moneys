import {Alert, Button, Link, Paper, TextField} from "@mui/material";
import React, {useState} from "react";
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

export default function Form({ todoHandler }) {

    const [description, setDescription] = useState(0);
    const [amount, setAmount] = useState(0);
    const [count, setCount] = React.useState(0);

    const getFiis = async () => {
        console.log(2222)
    }

    const mapFiis = async (result) => {
        let newList = [];

        result.map((row) => {
            newList.push({ label: row.slug, id: row.id, fiiClass: row.class  })
        });

        setList(newList);
        return newList;
    }

    const [list, setList] = useState(getFiis);
    const [inputValue, setInputValue] = React.useState('');

    const getLocalStorage = () => {
        var local = localStorage.getItem('expenses');
        if (local) {
            return JSON.parse(local);
        }

        return [];
    }

    const [expenses, setExpenses] = useState(getLocalStorage);

    const saveExpenses = () => {
        var counter = count + 1
        const newItem = {
            'id': Math.floor(Math.random() * 100000000),
            'count': counter,
            'description': description,
            'amount': amount
        };
        console.log(newItem);
        localStorage.setItem("expenses", JSON.stringify([...expenses, newItem]));
        setExpenses([...expenses, newItem]);
        setCount(counter)
    };

    const deleteTodo = (id) => {
        const filtered = expenses.filter((item) => item.id !== id);
        setExpenses(filtered);
        var counter = count
        setCount(counter -1)
        localStorage.setItem("expenses", JSON.stringify(filtered));
    };

    const deleteAll = () => {
        setExpenses([]);
        localStorage.setItem("expenses", JSON.stringify([]));
    };

    return (
        <Paper style={{ padding: 15, alignContent: "center", verticalAlign: "center" }}>
            
            <div>
                <TextField
                    type="text"
                    style={{ marginBottom: 10 }}
                    id="description"
                    label="Descrição"
                    onChange={
                        (e) => { setDescription(e.target.value);}
                    }
                >
                </TextField>
            </div>
            <div>
                <TextField
                    style={{ marginBottom: 10 }}
                    id="amount"
                    type="number"
                    min="0"
                    label="Valor"
                    onChange={
                        (e) => { setAmount(e.target.value);}
                    }
                >
                </TextField>
            </div>
            <div>
                <Button fullWidth={true} variant="contained" onClick={saveExpenses} >Salvar</Button>
            </div>
            <div>
                <List>
                <ListItem
                    <Divider />
                    {
                        expenses.map((item) => (
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
                            <ListItemText sx={{ marginLeft: '15' }} id={item.count} primary={ item.count } />
                            <ListItemText sx={{ marginLeft: '15' }} id={item.description} primary={ item.description } />
                            <ListItemText sx={{ marginLeft: '15' }} id={item.amount} primary={ item.amount } />

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Paper>
    );
}