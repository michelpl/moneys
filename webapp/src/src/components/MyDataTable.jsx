import * as React from 'react';
import {TextField, Paper, IconButton, Divider, Avatar} from '@mui/material';
import {useEffect, useState} from "react";
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
import MyCategories from './Tags';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Skeleton from '@mui/material/Skeleton';

export default function MyDataTable({ data, totalAmountToParent }) {
    const [description, setDescription] = useState('');
    const [toggleClass, setToggleClass] = useState('');
    const [categories, setCategories] = useState([]);
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const apiUrl = 'https://zany-winner-jwj4g4gvr72ppv5-8000.app.github.dev/api';

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
        var uri = apiUrl + '/input?user_id=' + data.userId + '&year=' + parseInt(data.year) + '&month='  + parseInt(data.month) + '&model='  + data.modelName;
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
                console.log(data);
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
                console.log(data);
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
        console.log(id);
        console.log(filtered);
        deleteItem(id);
        sumTotalAmount(filtered);
    };

    return (
        <Box>
            <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
                <h3>{data.label}</h3>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Descrição</TableCell>
                            <TableCell align="right">Valor</TableCell>
                            <TableCell align="left">Categorias</TableCell>
                            <TableCell align="right">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={'loading-skeleton ' + toggleClass }>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                        </TableRow>
                        <TableRow className={'loading-skeleton ' + toggleClass }>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                        </TableRow>
                        <TableRow className={'loading-skeleton ' + toggleClass }>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                            <TableCell>
                                <Skeleton variant="rounded" width={'500'} height={60} />
                            </TableCell>
                        </TableRow>
                        {rows.map((row, order) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="left">{order + 1}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="right">R$ {parseFloat(row.value).toFixed(2) }</TableCell>
                                <TableCell className='categoryTableCell'>
                                    {row.categories.map((data, order) => {
                                        let icon;
                                        console.log(data.icon)
                                        if (data.icon !== null && data.icon !== '') {
                                            icon = <AddCircleIcon />;
                                            return (
                                                <Chip
                                                    icon = { icon }
                                                    key={ order }
                                                    color='primary'
                                                    label={ data.label }
                                                    sx={{ marginRight: '5px', backgroundColor: data.color }}
                                                />
                                            );
                                        } else {
                                            let avatar;
                                            avatar = <Avatar src={"/logos/" + data.id + ".png"}/>
                                            return (
                                                <Chip
                                                    avatar={ avatar }
                                                    key={ order }
                                                    color='primary'
                                                    label={ data.label }
                                                    sx={{ marginRight: '5px', backgroundColor: data.color }}
                                                />
                                            );
                                        }


                                    })}
                                </TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Delete">
                                        <IconButton edge="end" aria-label="delete" onClick={() => deleteData(row._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Divider />
                <div id='botomActions'
                    align="left"
                    style={{ padding: '5px', marginTop: '15px' }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <TextField
                                    align="left"
                                    type="text"
                                    id="description"
                                    label="Descrição"
                                    width='100%'
                                    onChange={
                                        (e) => { setDescription(e.target.value); }
                                    }
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    id="amount"
                                    type="number"
                                    min="0.00"
                                    label="Valor"
                                    width='100%'
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
                            </Grid>
                            <Grid item xs={2}>
                                <MyCategories categoryList={categoryList} saveData={saveData} />
                            </Grid>
                            <Grid item xs={2} >
                                <Tooltip title="Salvar">
                                    <IconButton aria-label="save"
                                        onClick={() => saveData()}
                                        sx={{ padding: '0', marginTop: '0' }}
                                    >
                                        <AddCircleIcon fontSize='large' />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Box>

                    <Card sx={{ width: '100%', marginTop: '15px' }} >
                        <CardContent className='bottomCard'>
                            <p className='p1'>Total: R$ {totalAmount}</p>
                            <p className='p2'>Número de registros: {rows.length}</p>
                        </CardContent>
                    </Card>
                </div>
            </TableContainer>
        </Box>
    );
}
