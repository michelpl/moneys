import { Fragment, useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '@fontsource/roboto/300.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TransactionForm from './Form/Form';
import TransactionAvatar from './TransactionAvatar'
 
const MyPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function TransactionListItem({ transactionData, model }) {
  const [transactionId, setTransactionId] = useState(() =>{
    if (transactionData._id != undefined) {
      return transactionData._id;
    }
    return '';
  });
  const [description, setDescription] = useState(transactionData.description);
  const [amount, setAmount] = useState(parseFloat(transactionData.amount).toFixed(2));
  const [paidAmount, setPaidAmount] = useState((transactionData.paid_amount));
  const [paymentDate, setPaymentDate] = useState(transactionData.payment_date);
  const [dueDate, setDueDate] = useState(transactionData.due_date);
  const [categories, setCategories] = useState(transactionData.categories);

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

  const handleClick = () => {
    setOpen(!open);
  };

  const [data, setData] = useState('');

  const childToParent = (input, value) => {
    switch (input) {
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(value);
        if (value - paidAmount > 0) {
          setCurrent(value - paidAmount);
          setIsPaid('text.disabled');
          break;
        }
        setCurrent('+' + (value - paidAmount * -1).toString());
        setIsPaid('success.main');
        break;
      case 'paidAmount':
        setPaidAmount(value);
        if (amount - value > 0) {
          setCurrent(amount - value);
          setIsPaid('text.disabled');
          break;
        }
        setCurrent('+' + ((amount - value) * -1).toFixed(2).toString());
        setIsPaid('success.main');
        break;

      case 'categories':
        setCategories(value);
      case 'dueDate':
        setDueDate(value);
      case 'paymentDate':
        setPaymentDate(value);

        if (value) {
          setIsPaid('success.main');
        }
        break;
      default:
    }
  }

  function HandleDescription() {
    if (description != undefined && description != '') {
      return <>
        <Typography variant='h5'>{description}</Typography>
      </>
        ;
    }
    return (
      <Tooltip arrow title='Preencha os dados da transão clicando nela para abrir seu formulário'>
        <Typography variant='h5' sx={{ color: 'text.secondary' }}><i> ------- </i>
        </Typography>
      </Tooltip> 
    )
  }

  return (
    <Paper variant='outlined' sx={{ marginBottom: 0.5, padding: 0, backgroundColor: 'background.paper' }}>
      <ListItemButton onClick={handleClick}>
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
              title={transactionData.description}
              image={transactionData.image}
              id={transactionData._id}
              categories={categories}
            >
            </TransactionAvatar>
          </ListItemIcon>
          <ListItemText
            primary={<HandleDescription />}
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
                    <Typography variant='span'> {dueDate} </Typography>
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
                <Tooltip title="Valor destinado" placement="top-end" arrow>
                  <Typography variant='h5'>R$ {amount}</Typography>
                </Tooltip>
              </>
            }
            secondary={
              <Typography variant='span' sx={{ color: 'text.secondary' }}>
                <span>Falta pagar: R$ {current}</span>
              </Typography>
            }
          />
        </ListItem>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <TransactionForm handleClick={handleClick} childToParent={childToParent} data={transactionData} model={model}></TransactionForm>
        </List>
      </Collapse>
    </Paper >
  );
}
