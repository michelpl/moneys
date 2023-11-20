import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { Image } from "@mui/icons-material";
import MyDataTable from './MyDataTable.jsx';
import { ButtonBase, TextField } from '@mui/material';


export default function Expenses() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = React.useState(0);

    
    return (
        <div>
            <MyDataTable />
        </div>
    );
}