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

    const columns = [
        { 
            field: 'id', 
            headerName: 'id', 
            editable: false 
        },
        { 
            field: 'name', 
            headerName: 'Name', 
            width: 180, 
            editable: true 
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 80,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'joinDate',
            headerName: 'Join date',
            type: 'date',
            width: 180,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'Department',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Market', 'Finance', 'Development'],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
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
    return (
        <div>
            <MyDataTable2 
                modelName={"Expenses"}
             />
        </div>
    );
}