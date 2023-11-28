import * as React from 'react';
import MyDataTable from './MyDataTable2.jsx';
import { Box } from '@mui/material';

export default function Budget() {
    return (
        <Box>
            <MyDataTable data = {'budget'}/>
        </Box>
    );
}