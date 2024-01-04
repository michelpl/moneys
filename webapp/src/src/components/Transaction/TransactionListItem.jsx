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

export default function TransactionListItem({ transactionData }) {
  const [description, setDescription] = useState(transactionData.description);
  const [amount, setAmount] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [categories, setCategories] = useState([]);

  const [totalAmount, setTotalAmount] = useState('');
  const [open, setOpen] = useState(false);

  const checkIfIspaid = () => {
    if (transactionData.value == transactionData.paidAmount) {
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
      case 'paidAmount':
      case 'dueDate':
      case 'paymentDate':
      default:
    }
    
  }

  return (
    <Paper variant='outlined' sx={{ marginBottom: 0.5, padding: 0, backgroundColor: 'background.paper' }}>
      <ListItemButton onClick={handleClick}>
        <ListItem key={transactionData.id} alignItems="flex-start"
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
              title={ transactionData.description }
              image={transactionData.image}
              id={transactionData._id}
              categories={transactionData.categories}
            >
            </TransactionAvatar>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='h5'>{ description }</Typography>}
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
                    <Typography variant='span'> {transactionData.dueDate} </Typography>
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
                  <Typography variant='h5'>R$ {parseFloat(transactionData.value).toFixed(2)}</Typography>
                </Tooltip>
              </>
            }
            secondary={
              <Typography variant='span' sx={{ color: 'text.secondary' }}>
                <span>Ainda falta pagar: R$ {(parseFloat(transactionData.value) - parseFloat(transactionData.paidAmount)).toFixed(2)}</span>
              </Typography>
            }
          />
        </ListItem>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <TransactionForm childToParent={childToParent} data={transactionData}></TransactionForm>
        </List>
      </Collapse>
    </Paper >
  );
}
