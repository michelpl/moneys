import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import TransactionFormColumn1 from './TransactionFormColumn1';
import TransactionFormColumn2 from './TransactionFormColumn2';

export default function TransactionForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <TransactionFormColumn1 />
        <TransactionFormColumn2 />
        <Grid item xs={12} sx={{marginTop: 2}}>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{marginBottom: 2}}>
          <TextField multiline
            minRows={4} fullWidth={true} label="Anotações" variant="outlined" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}