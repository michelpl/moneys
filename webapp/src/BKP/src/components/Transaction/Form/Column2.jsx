import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tags from '../../Tags'
import CustomDatePicker from '../../FormControl/CustomDatePicker';

export default function TransactionFormColumn2({data}) {
    return (
        <>
            <Grid key={'column2'} item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="currentInstallment"
                            label="Parcela atual"
                            type="number"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="totalInstallmentsNumber"
                            label="Total de parcelas"
                            type="number"
                            fullWidth
                            min='0'
                            max='5'
                            step='2'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Tags />
                    </Grid>
                    
                </Grid>
            </Grid>
        </>
    )
}