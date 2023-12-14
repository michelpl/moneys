import * as React from 'react';
import { TextField, Paper, IconButton, Divider, Avatar, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MyCategories from './Tags';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyDataTable({ data, totalAmountToParent }) {
    const [description, setDescription] = useState('');
    const [toggleClass, setToggleClass] = useState('');
    const [categories, setCategories] = useState([]);
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const apiUrl = 'http://ec2-34-202-165-60.compute-1.amazonaws.com:8000/api';

    function sumTotalAmount(newList) {
        var totalAmount = 0;
        newList.forEach(function (expense) {
            totalAmount += parseFloat(expense.value);
        });
        setTotalAmount(totalAmount.toFixed(2));
        totalAmountToParent(
            {
                'model': data.modelName,
                'amount': totalAmount
            }
        );

        localStorage.setItem(data.modelName + 'TotalAmount', JSON.stringify(totalAmount.toFixed(2)));
    }

    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        var uri = apiUrl + '/input?user_id=' + data.userId + '&year=' + parseInt(data.year) + '&month=' + parseInt(data.month) + '&model=' + data.modelName;
        fetch(uri)
            .then((response) => response.json())
            .then((data) => {
                setRows(data);
                sumTotalAmount(data);
                setToggleClass('hide');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const categoryList = (categoryList) => {
        setCategories(categoryList);
    }

    const createItem = async (item) => {
        var uri = apiUrl + '/input';
        fetch(uri, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        }).then((response) => response.json())
            .then((data) => {

            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const deleteItem = async (id) => {
        let uri = apiUrl + '/input/' + id;
        fetch(uri, {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((data) => {

            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const saveData = () => {
        const newItem = {
            '_id': Math.floor(Math.random() * 100000000),
            'user_id': data.userId,
            'description': description,
            'value': parseFloat(amount),
            'model': data.modelName,
            'month': parseInt(data.month),
            'year': parseInt(data.year),
            'categories': categories
        };
        let newList = [...rows, newItem];

        setRows(newList);
        sumTotalAmount(newList);
        createItem(newItem);
    };

    const deleteData = (id) => {
        const filtered = rows.filter((item) => item._id !== id);
        setRows(filtered);
        deleteItem(id);
        sumTotalAmount(filtered);
    };
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    }));

    return (
        <Paper component="main">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: 2
                }}
            >
                <Typography variant="h5" align='center'>
                    {data.modelLabel}
                </Typography>
                <Grid container padding={1}>
                    <Grid item xs={12} md={1}>
                        <Item>Id</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Descrição</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Valor</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Categorias</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item align='center'>Ações
                        </Item>
                    </Grid>

                </Grid>
                {rows.map((row, order) => (
                    <Grid container key={'row-' + order}>
                        <Grid item key={'cel-id-' + order} xs={12} md={12} >
                            <Item>{order + 1}</Item>
                        </Grid>
                        <Grid item key={'cel-description-' + order} xs={12} md={4}>
                            <Item>{row.description}</Item>
                        </Grid>
                        <Grid item key={'cel-amount-' + order} xs={12} md={2}>
                            <Item>R$ {parseFloat(row.value).toFixed(2)}</Item>
                        </Grid>
                        <Grid item key={'cel-categories-' + order} xs={12} md={4} alignContent={'left'}>
                            <Item>
                                {row.categories.map((data, order) => {
                                    let icon;
                                    if (data.icon !== null && data.icon !== '') {
                                        icon = <AddCardIcon />;
                                        return (
                                            <Chip
                                                icon={icon}
                                                key={'chip-' + order}
                                                color='primary'
                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.color }}
                                            />
                                        );
                                    } else {
                                        let avatar;
                                        avatar = <Avatar src={"/logos/" + data.id + ".png"} />
                                        return (
                                            <Chip
                                                avatar={avatar}
                                                key={'chip-' + order}
                                                color='primary'
                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.color }}
                                            />
                                        );
                                    }
                                })}
                            </Item>
                        </Grid>
                        <Grid item key={'cel-actions-' + order} xs={12} md={1}>
                            <Item align='right'>
                                <Tooltip title="Delete">
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteData(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Item>
                        </Grid>
                        <Grid item key={'cel-divider-' + order} xs={12}>
                            <Divider />
                        </Grid>

                    </Grid>
                ))}
                <Grid item xs={12} className={'loading-skeleton ' + toggleClass }>
                    <Skeleton variant="rounded" width={'98%'} sx={{marginTop: 2}} height={25} />
                    <Skeleton variant="rounded" width={'98%'} sx={{marginTop: 2}} height={25} />
                </Grid>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item key={'description-input'} xs={12} sm={3}>
                            <TextField
                                name="description"
                                required
                                fullWidth
                                label="Descrição"
                                autoFocus
                                onBlur={
                                    (e) => { setDescription(e.target.value); }
                                }
                            />
                        </Grid>
                        <Grid item key={'amount-input'} xs={12} sm={3} md={2} lg={1}>
                            <TextField
                                required
                                fullWidth
                                type='number'
                                id="amount"
                                label="Valor"
                                name="amount"
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
                            />
                        </Grid>
                        <Grid item key={'castegory-input'} xs={12} sm={3} md={2} >
                            <MyCategories categoryList={categoryList} saveData={saveData} />
                        </Grid>
                        <Grid item key={'save-button'} xs={12} sm={3}>
                            <Tooltip title="Salvar">
                                <IconButton aria-label="save"
                                    onClick={() => saveData()}
                                >
                                    <AddCircleIcon fontSize='large' />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item key={'total-amount-grid'} xs={12}>
                            <Card>
                                <CardContent className='bottomCard'>
                                    <p className='p1'>Total: R$ {totalAmount}</p>
                                    <p className='p2'>Número de registros: {rows.length}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    );
}