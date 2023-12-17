import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Grid, Icon, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppTheme from '../config/AppTheme';
import Box from '@mui/material/Box';
const MyPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1E1E1E',
  padding: theme.spacing(2),
}));

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',

  border: '1px solid',

  padding: theme.spacing(1),

  flexGrow: 1,
}));

export default function MyTableRow() {
  return (
    <MyPaper variant='outlined'>

      <Grid container sx={{ padding: 2 }} spacing={2}>
        <Grid xs={1}>
          <Avatar sx={{
            backgroundColor: 'success.main',
            color: 'text.primary'
          }}>
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
        <Grid xs={3}>
          aaaa
        </Grid>
        <Grid xs={2}>
          bbb
        </Grid>
        <Grid xs={2}>
          ddd
        </Grid>
        <Grid item xs={4} >
          eeee
        </Grid>

        <Grid item xs={11}>
          ddd
        </Grid>
      </Grid>
    </MyPaper>
  );
}
