import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Chip, Collapse, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppTheme from '../config/AppTheme';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';

const MyPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  background: theme.primary.surface,
  border: '1px solid',
  borderRadius: '4px',
  flexGrow: 1,
}));

export default function MyTableRow() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MyPaper variant='outlined' sx={{ padding: 0, borderRadius: 2, backgroundColor: 'primary.surface' }}>
      <ListItem alignItems="flex-start"
      >
        <ListItemAvatar>
          <Avatar alt="" src="a.svg" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant='subtitle2'><strong>Entradas</strong></Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Identificador da transação: 456789"}
            </React.Fragment>
          }
        />
        <ListItemText
          sx={{ textAlign: 'right'}}
          edge="end"
          primary={<Typography variant='subtitle2'><strong>R$123.54</strong></Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"29 de julho 2023 - 12:00h"}
            </React.Fragment>
          }
        />
      </ListItem>
    </MyPaper >
  );
}
