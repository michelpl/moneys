import * as React from 'react';
import Box from '@mui/material/Box';
import DataGrid from './StockDataGrid';
import {useState} from "react";
import {Image} from "@mui/icons-material";

export default function DataGridDemo({ rows }) {
    return (
        <Box minHeight={ 300 } sx={{ width: '100%', backgroundColor: 'white' }} >
            <Box sx={{ padding: 2 }} >
            </Box>
            <DataGrid rows={ rows }
            ></DataGrid>
        </Box>
    );
}