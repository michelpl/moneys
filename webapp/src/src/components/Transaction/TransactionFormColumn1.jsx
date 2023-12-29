import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import MoneyTextField from '../FormControl/MoneyTextField';
import CustomDatePicker from '../FormControl/CustomDatePicker';

export default function TransactionFormColumn1() {
    return (
        <>
            <Grid key={'column1'} item xs={12} sm={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth={true} label="Descrição" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MoneyTextField id={'current_amount'} label={'Valor pago até agora'} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MoneyTextField id={'amount'} label={'Valor total'} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDatePicker fullWidth={true} id={'due_date'} label="Vencimento" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}