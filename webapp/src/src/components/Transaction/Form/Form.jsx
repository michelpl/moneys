import { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';

import BottomActions from './BottomActions';
import MoneyTextField from '../../FormControl/MoneyTextField';
import CustomDatePicker from '../../FormControl/CustomDatePicker';
import CategorySelector from '../../FormControl/CategorySelector';

export default function TransactionForm({ childToParent, data, model, date }) {

  const [transactionId, setTransactionId] = useState(data._id);
  const [description, setDescription] = useState(data.description);
  const [amount, setAmount] = useState(data.amount);
  const [paidAmount, setPaidAmount] = useState(data.paid_amount);
  const [categoryList, setCategoryList] = useState(data.categories);
  const [dueDate, setDueDate] = useState(data.due_date);
  const [paymentDate, setPaymentDate] = useState(data.payment_date);
  const [currentInstallment, setCurrentInstallment] = useState(data.current_installment);
  const [totalInstallmentsNumber, setTotalInstallmentsNumber] = useState(data.total_installments);

  const handleNotesInitialValue = (data) => {
    if (data != undefined && data.notes != undefined && data.notes != null) {
      return data.notes.toString();
    }
    return '';
  }

  const [notes, setNotes] = useState(handleNotesInitialValue(data));
  //const apiUrl = 'http://3.88.14.53:8000/api/v1';
  const apiUrl = 'http://localhost:8000/api/v1';

  const saveData = async (item) => {

    if (transactionId !== undefined && transactionId !== '') {
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
      'month': parseInt(date.month),
      'year': parseInt(date.year),
      'categories': categoryList
    }
    //sumTotalAmount(newList);
    return newItem;
  };

  const handleFormActions = (action) => {
    switch (action) {
      case 'save':
        const newItem = createItem();
        saveData(newItem);
        break;
      case 'cancel':
        childToParent('toggle');
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
                value={description === null ? '' : description}
                onChange={(event) => {
                  if (event.target.value != undefined && event.target.value != null) {
                    setDescription(event.target.value);
                    childToParent('description', event.target.value);
                  }
                  
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField setState={setAmount} setParentState={childToParent} id={'amount'} initialValue={amount} label={'Valor total'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MoneyTextField setState={setPaidAmount} setParentState={childToParent} id={'paidAmount'} initialValue={paidAmount} label={'Valor pago até agora'} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker setDate={setDueDate} setParentState={childToParent} initialValue={dueDate} fullWidth={true} id={'dueDate'} label="Data de vencimento" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker setDate={setPaymentDate} setParentState={childToParent} initialValue={paymentDate} fullWidth={true} id={'paymentDate'} label="Data de pagamento" />
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