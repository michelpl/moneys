import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Chip, Collapse, Grid, Icon, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppTheme from '../config/AppTheme';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Box from '@mui/material/Box';
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
    <MyPaper variant='outlined' sx={{ backgroundColor: 'primary.surface' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />

      </ListItem>
      <ListItemButton onClick={handleClick} >
        <Chip label="Chip Outlined" variant="outlined" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
    </MyPaper >
  );
}
