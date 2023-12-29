import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '@fontsource/roboto/300.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InputForm from './TransactionForm';

const MyPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function TransactionListItem() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper variant='outlined' sx={{ marginBottom: 0.5, padding: 0, backgroundColor: 'background.paper' }}>
      <ListItemButton onClick={handleClick}>
        <ListItem alignItems="flex-start"
          secondaryAction={
            <>
              <Tooltip title="Pago" placement="top-end" arrow>
                <DoneAllIcon sx={{ marginTop: 1, marginRight: 0.4, color: 'success.main' }} edge='end' aria-label='paid'></DoneAllIcon>
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
            <PaidRoundedIcon sx={{ fontSize: 30, color: 'pink.main' }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant='h5'>Conta de luz</Typography>}
            secondary={
              <React.Fragment>
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
                    <Typography variant='span'> 12/01/2023</Typography>
                  </Typography>
                }
              </React.Fragment>
            }
          />
          <ListItemText
            sx={{ textAlign: 'right', marginRight: 5 }}
            edge="end"
            primary={
              <>
                <Tooltip title="Valor destinado" placement="top-end" arrow>
                  <Typography variant='h5'>R$ 21.123,54</Typography>
                </Tooltip>
              </>
            }
            secondary={
              <Typography variant='span' sx={{ color: 'text.secondary' }}>
                <span>Ainda falta pagar: R$ 2.200,22</span>
              </Typography>
            }
          />
        </ListItem>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <InputForm></InputForm>
        </List>
      </Collapse>
    </Paper >
  );
}
