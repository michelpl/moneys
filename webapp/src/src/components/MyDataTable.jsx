import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { Image } from "@mui/icons-material";

const columns = [
    {
        field: 'id',
        headerName: 'Ordem',
        width: 120,
        sortable: true
    },
    {
        field: 'description',
        headerName: 'Descrição',
        type: 'text',
        width: 120,
        sortable: true
    },
    {
        field: 'value',
        headerName: 'Valor',
        type: 'number',
        width: 110,
        sortable: true
    },
    {
        field: 'payment_date',
        headerName: 'Data de pagamento',
        type: 'date',
        sortable: true
    },
    {
        field: 'ok',
        headerName: 'OK',
        type: 'text',
        width: 110,
        sortable: true,
        align: 'right'
    },
    {
        field: 'category',
        headerName: 'Categoria',
        type: 'text',
        width: 110,
        sortable: true,
        align: 'right'
    }
];

export default function MyDataTable({ rows }) {
    return (
        <Box minHeight={300} sx={{ width: '100%', backgroundColor: 'white' }} >
            <DataGrid
                rows={rows}
                columns={columns}
                stat
                checkboxSelection
                disableRowSelectionOnClick
                autoHeight={true}
            />
        </Box>
    );
}