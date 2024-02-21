import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, Tooltip } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SellIcon from '@mui/icons-material/Sell';
import UpdateIcon from '@mui/icons-material/Update';

export default function MonthCardPropertiesList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
        >
          <ListItemIcon>
            <CurrencyExchangeIcon />
          </ListItemIcon>
          <ListItemText>
            Saldo atual: <strong>R$ 10.000,00</strong>
          </ListItemText>
        </ListItemButton>
        <ListItemButton
        >
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <ListItemText>
            <Tooltip title="Ainda falta pagar" arrow>
                <span> Valor em aberto: <strong>R$ 2.000,00</strong></span>
            </Tooltip>
          </ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
        >
            <ListItemIcon>
                <UpdateIcon />
            </ListItemIcon>
            <ListItemText>
                Atualizado em: 09/12/2023 15:27h
            </ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
}
