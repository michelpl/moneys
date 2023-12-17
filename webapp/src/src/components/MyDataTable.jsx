import * as React from 'react';
import { TextField, Paper, IconButton, Divider, Avatar, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MyCategories from './Tags';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteIcon from '@mui/icons-material/Delete';
import DynamicComponent from './DynamicComponent';
import InfoIcon from '@mui/icons-material/Info';

export default function MyDataTable({ data, totalAmountToParent }) {
    const [description, setDescription] = useState('');
    const [toggleClass, setToggleClass] = useState('');
    const [categories, setCategories] = useState([]);
    const [amount, setAmount] = useState(0);
    const [dueDate, setDueDate] = useState('');
    const [comments, setComments] = useState('');
    const [totalAmount, setTotalAmount] = React.useState(0);
    const apiUrl = 'http://3.88.14.53:8000/api';

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
            'comments': comments,
            'dueDate': dueDate,
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
                    <Grid item xs={1} md={1}>
                        <Item>Id</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Descrição</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Valor</Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item>Vencimento</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Categorias</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Categorias</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item align='center'>Ações
                        </Item>
                    </Grid>

                </Grid>
                {rows.map((row, order) => (
                    <Grid container key={'row-' + order}>
                        <Grid item key={'cel-id-' + order} xs={1} md={1} >
                            <Item>{order + 1}</Item>
                        </Grid>
                        <Grid item key={'cel-description-' + order} xs={3}>
                            <Item>{row.description}</Item>
                        </Grid>
                        <Grid item key={'cel-amount-' + order} xs={2}>
                            <Item>R$ {parseFloat(row.value).toFixed(2)}</Item>
                        </Grid>
                        <Grid item key={'cel-due-date-' + order} xs={2}>
                            <Item>{row.dueDate}</Item>
                        </Grid>
                        <Grid item key={'cel-categories-' + order} xs={3} alignContent={'left'}>
                            <Item>

                                {row.categories.map((data, order) => {
                                    var iconName = data.icon
                                    if (iconName !== null && iconName !== '' && iconName != 'undefined') {
                                        return (
                                            <Chip
                                                icon={<DynamicComponent component={iconName} />}
                                                key={'chip-' + order}

                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.backgroundColor, color: data.color }}
                                            />
                                        );
                                    } else {
                                        let avatar;
                                        avatar = <Avatar sx={{ backgroundColor: data.backgroundColor }} src={"/logos/" + data.id + ".png"} />
                                        return (
                                            <Chip
                                                avatar={avatar}
                                                key={'chip-' + order}

                                                label={data.label}
                                                sx={{ marginRight: '5px', backgroundColor: data.backgroundColor, color: data.color }}
                                            />
                                        );
                                    }
                                })}
                            </Item>
                        </Grid>
                        <Grid item key={'cel-actions-' + order} xs={12} md={1}>
                            <Item align='right'>
                                <Tooltip title={ row.comments }>
                                    <IconButton edge="end" aria-label="info">
                                        <InfoIcon />
                                    </IconButton>
                                </Tooltip>
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
                <Grid item xs={12} className={'loading-skeleton ' + toggleClass}>
                    <Skeleton variant="rounded" width={'98%'} sx={{ marginTop: 2 }} height={25} />
                    <Skeleton variant="rounded" width={'98%'} sx={{ marginTop: 2 }} height={25} />
                </Grid>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item key={'description-input'} xs={3}>
                            <TextField
                                name="description"
                                required
                                fullWidth
                                label="Descrição"
                                onBlur={
                                    (e) => { setDescription(e.target.value); }
                                }
                            />
                        </Grid>
                        <Grid item key={'amount-input'} xs={2}>
                            <TextField
                                required
                                fullWidth
                                type='number'
                                id="amount"
                                label="Valor destinado"
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
                        <Grid item key={'due-date-input'} xs={2}>
                            <TextField
                                required
                                fullWidth
                                type='date'
                                id="due-date"
                                label="Vencimento"
                                name="due-date"
                                onChange={
                                    (e) => { setDueDate(e.target.value); }
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
                        <Grid item key={'castegory-input'} xs={4} >
                            <MyCategories categoryList={categoryList} saveData={saveData} />
                        </Grid>
                        <Grid item key={'save-button'} xs={1}>
                            <Tooltip title="Salvar">
                                <IconButton aria-label="save"
                                    onClick={() => saveData()}
                                >
                                    <AddCircleIcon fontSize='large' />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item key={'comments-input'} xs={11}>
                            <TextField
                                name="comments"
                                fullWidth
                                label="Comentários"
                                onBlur={
                                    (e) => { setComments(e.target.value); }
                                }
                            />
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