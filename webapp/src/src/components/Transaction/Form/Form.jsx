import { Fragment, useState, ChangeEvent, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button, Divider } from '@mui/material';

import BottomActions from './BottomActions';
import MoneyTextField from '../../FormControl/MoneyTextField';
import CustomDatePicker from '../../FormControl/CustomDatePicker';
import CategorySelector from '../../FormControl/CategorySelector';

export default function TransactionForm({ handleClick, childToParent, data, model }) {

  const [transactionId, setTransactionId] = useState(data._id);
  const [description, setDescription] = useState(data.description);
  const [amount, setAmount] = useState(data.amount);
  const [paidAmount, setPaidAmount] = useState(data.paid_amount);
  const [categoryList, setCategoryList] = useState(data.categories);
  const [dueDate, setDueDate] = useState(data.due_date);
  const [paymentDate, setPaymentDate] = useState(data.payment_date);
  const [currentInstallment, setCurrentInstallment] = useState(data.current_installment);
  const [totalInstallmentsNumber, setTotalInstallmentsNumber] = useState(data.total_installments);
  const [notes, setNotes] = useState(data.notes);
  const apiUrl = 'http://3.88.14.53:8000/api/v1';

  const saveData = async (item) => {

    if (transactionId != undefined && transactionId != '') {
      updateTransaction(item);
      return;
    }

    createTransaction(item);
  }

  const createTransaction = (item) => {
    var uri = apiUrl + '/transaction';
    fetch(uri, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).then((response) => response.json())
      .then((data) => {
        setTransactionId(data._id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const updateTransaction = (item) => {
    var uri = apiUrl + '/transaction/' + transactionId;
    fetch(uri, {
      method: 'PUT',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).then((response) => response.json())
      .then((data) => {

      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const createItem = () => {
    const newItem = {
      _id: transactionId,
      'user_id': 1,
      'description': description,
      'amount': parseFloat(amount),
      'paid_amount': parseFloat(paidAmount),
      'notes': notes,
      'due_date': dueDate,
      'payment_date': paymentDate,
      'model': model.name,
      'month': 1,
      'year': 2024,
      'categories': categoryList
    }
    //sumTotalAmount(newList);
    saveData(newItem);
  };

  const handleFormActions = (action) => {
    switch (action) {
      case 'save':
        createItem();
        break;
      case 'cancel':
        handleClick();
        break;
      case 'delete':
        childToParent('deleteItem', transactionId);
        break;
      default:
    }
    return null;
  }

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
                autoFocus
                id="outlined-controlled"
                label="Descrição"
                fullWidth
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                  childToParent('description', event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField setState={setAmount} id={'amount'} initialValue={amount} label={'Valor total'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField setState={setPaidAmount} id={'paidAmount'} initialValue={paidAmount} label={'Valor pago até agora'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker setDate={setDueDate} initialValue={dueDate} fullWidth={true} id={'due_date'} label="Data de vencimento" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker setDate={setPaymentDate} initialValue={paymentDate} fullWidth={true} id={'payment_date'} label="Data de pagamento" />
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
                value={currentInstallment}
                onChange={(event) => {
                  setCurrentInstallment(event.target.value);
                }}
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
                value={totalInstallmentsNumber}
                onChange={(event) => {
                  setTotalInstallmentsNumber(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CategorySelector setState={setCategoryList} childToParent={childToParent} initialValue={categoryList} />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: 2 }}>
          <TextField multiline
            minRows={4}
            fullWidth={true}
            label="Anotações"
            variant="outlined"
            value={notes}
            onChange={(event) => {
              setNotes(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginBottom: 5 }}>
        <BottomActions handleFormActions={handleFormActions} ></BottomActions>
      </Grid>
    </Fragment>
  );
}