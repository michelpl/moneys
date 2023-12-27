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
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '@fontsource/roboto/300.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
    <MyPaper variant='outlined' sx={{ padding: 0, backgroundColor: 'primary.surface' }}>
      <ListItem alignItems="flex-start"
        secondaryAction={
          <>
            <DoneAllIcon sx={{ marginTop: 1, color: 'success.main' }} edge='end' aria-label='paid'></DoneAllIcon>
            <IconButton sx={{ marginTop: -1 }} edge="end" aria-label="more">
              <MoreVertIcon />
            </IconButton>
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
              <Typography variant='h5'>R$ 21.123,54</Typography>
            </>
          }
          secondary={
            <Typography variant='span' sx={{ color: 'text.secondary' }}>
              <span>Ainda falta pagar: R$ 2.200,22</span>
            </Typography>
          }
        />
      </ListItem>
    </MyPaper >
  );
}
