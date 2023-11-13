import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from "@mui/material";
import {useState} from "react";

function getImage(params) {
    return <Box
        component="img"
        sx={{
            maxWidth: 30,
        }}
        src={ 'logos/' + params.row.slug + ".jpeg" || '' }
    />;
}

const columns: GridColDef[] = [
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

export default function DataGridDemo({ rows }) {
    const [pageSize, setPageSize] = useState(50);

    return (
        <Box minHeight={ 300 } sx={{ width: '100%', backgroundColor: 'white' }} >
            <DataGrid
                rows={ rows }
                columns={ columns }
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize:  pageSize
                        },
                    },
                    ...rows.initialState,
                    filter: {
                        filterModel: {
                            items: [
                            ],
                        },
                    },
                    sorting: {
                        sortModel: [{ field: 'growing_expectation', sort: 'desc' }],
                    },
                }}
                stat
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                autoHeight={ true }
            />
        </Box>
    );
}
