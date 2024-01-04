import { Fragment, useState, ChangeEvent, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button, Divider } from '@mui/material';

import BottomActions from './BottomActions';
import MoneyTextField from '../../FormControl/MoneyTextField';
import CustomDatePicker from '../../FormControl/CustomDatePicker';
import Tags from '../../Tags';


export default function TransactionForm({ childToParent, data }) {
  const [description, setDescription] = useState(data.description);
  const [amount, setAmount] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <Fragment>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid key={'column1'} item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField
              id="outlined-controlled"
              label="Descrição"
              value={description}
              fullWidth
              onChange={(event) => {
                setDescription(event.target.value);
                childToParent('description', event.target.value);
              }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField id={'amount'} label={'Valor total'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField id={'current_amount'} label={'Valor pago até agora'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker fullWidth={true} id={'due_date'} label="Data de vencimento" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker fullWidth={true} id={'payment_date'} label="Data de pagamento" />
            </Grid>
          </Grid>
        </Grid>
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
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: 2 }}>
          <TextField multiline
            minRows={4} fullWidth={true} label="Anotações" variant="outlined" />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} sx={{marginBottom:5}}>
        <BottomActions></BottomActions>
      </Grid>
    </Fragment>
  );
}