import { Fragment, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '@fontsource/roboto/300.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TransactionForm from './Form/Form';
import TransactionAvatar from './TransactionAvatar'
import dayjs from 'dayjs';
import { NumericFormat } from 'react-number-format';

export default function TransactionListItem({ handleListActions, transactionData, model, handleTotalAmount, handleTransactions, date }) {
  const [transactionId] = useState(() => {
    if (transactionData._id !== undefined) {
      return transactionData._id;
    }
    return '';
  });

  const [transaction] = useState(transactionData);
  const [description, setDescription] = useState(transactionData.description);
  const [amount, setAmount] = useState(parseFloat(transactionData.amount).toFixed(2));
  const [paidAmount, setPaidAmount] = useState((transactionData.paid_amount));
  const [paymentDate] = useState(transactionData.payment_date);
  const [dueDate] = useState(transactionData.due_date);
  const [categories] = useState(transactionData.categories);

  const sumCurrentAmount = () => {
    if (
      !isNaN(
        (
          parseFloat(transactionData.amount) -
          parseFloat(transactionData.paid_amount)
        )
      )
    ) {
      return (
        parseFloat(transactionData.amount) -
        parseFloat(transactionData.paid_amount)
      ).toFixed(2)
    }
    return '0,00';
  }

  const [current, setCurrent] = useState(sumCurrentAmount);
  const [open, setOpen] = useState(false);

  const checkIfIspaid = () => {
    if (current === paidAmount) {
      return 'success.main';
    }

    return 'text.disabled';
  };

  const [isPaid, setIsPaid] = useState(checkIfIspaid);

  const toggle = () => {
    setOpen(!open);
  }

  const childToParent = (input, value) => {
    if (transaction[input] !== undefined) {
      let updatedTransaction = transaction;
      updatedTransaction[input] = value;
      handleTransactions(updatedTransaction);
      setDescription(transaction.description);
    }
    // @Todo: move to other function
    switch (input) {
      case 'amount':
        if (value === '') {
          value = 0;
        }
        setAmount(value);

        if (value - paidAmount > 0) {
          setCurrent(value - paidAmount);
          setIsPaid('text.disabled');
          break;
        }
        setCurrent(value - paidAmount);
        if (paidAmount > 0) {
          setIsPaid('success.main');
        }
        break;
      case 'paidAmount':
        if (value === '') {
          value = 0;
        }
        setPaidAmount(value);
        if (amount - value <= 0 && paidAmount > 0) {
          setIsPaid('success.main');
        }
        if (amount - value > 0) {
          setIsPaid('text.disabled');

        }
        setCurrent(amount - value);
        break;
      case 'deleteItem': // @Todo: move to other function
        handleListActions('deleteItem', value);
        break;
      case 'toggle':  // @Todo: move to other function
        setOpen(!open);
        break;
      default:
    }
  }

  function HandleDescription() {
    if (transaction.description !== undefined && transaction.description !== null) {
      return <>
        <Typography variant='h5'>{transaction.description}</Typography>
      </>
        ;
    }
    return (
      <Tooltip arrow title='Preencha os dados da transação clicando nela para abrir seu formulário'>
        <Typography variant='h5' sx={{ color: 'text.secondary' }}><i> ------- </i>
        </Typography>
      </Tooltip>
    )
  }

  return (
    <Paper variant='outlined' sx={{ marginBottom: 0.5, padding: 0, backgroundColor: 'background.paper' }}>
      <ListItemButton onClick={toggle}>
        <ListItem key={transactionId} alignItems="flex-start"
          secondaryAction={
            <>
              <Tooltip title="Pago" placement="top-end" arrow>
                <DoneAllIcon sx={{ marginTop: 1, marginRight: 0.4, color: isPaid }} edge='end' aria-label='paid'></DoneAllIcon>
              </Tooltip>
              <Tooltip title="Expandir" placement="top-end" arrow>
                <IconButton sx={{ marginTop: -1 }} edge="end" aria-label="more">
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            </>
          }
        >
          <ListItemIcon>
            <TransactionAvatar
              title={transaction.description}
              image={transactionData.image}
              id={transactionData._id}
              categories={categories}
            >
            </TransactionAvatar>
          </ListItemIcon>
          <ListItemText
            primary={transaction.description}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                </Typography>
                {
                  <Typography variant='span'>
                    Vencimento:
                    <Typography variant='span'> {dayjs(dueDate).format('DD/MM/YYYY')} </Typography>
                  </Typography>
                }
              </Fragment>
            }
          />
          <ListItemText
            sx={{ textAlign: 'right', marginRight: 5 }}
            edge="end"
            primary={
              <>

                <NumericFormat
                  value={amount}
                  thousandSeparator='.'
                  decimalSeparator=','
                  displayType="text"
                  decimalScale='2'
                  fixedDecimalScale={true}
                  allowNegative={false}
                  prefix='R$ '
                  renderText={(value) => <Tooltip title="Valor destinado" placement="top-end" arrow><Typography variant='h5'>{value}</Typography></Tooltip>}
                />

              </>
            }
            secondary={
              <NumericFormat
                value={current}
                thousandSeparator='.'
                decimalSeparator=','
                displayType="text"
                decimalScale='2'
                allowNegative={false}
                fixedDecimalScale={true}
                prefix='R$ '
                renderText={(value) => {
                  return (
                    <Typography variant='span' sx={{ color: 'text.secondary' }}>
                      <span>{value}</span>
                    </Typography>)
                }}

              />

            }
          />
        </ListItem>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <TransactionForm childToParent={childToParent} data={ transaction } model={ model } date={ date }></TransactionForm>
        </List>
      </Collapse>
    </Paper >
  );
}
