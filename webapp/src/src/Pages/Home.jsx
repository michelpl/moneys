import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MonthCard from '../components/MonthCard';
import { Paper } from '@mui/material';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MyTopBar from '../components/MyTopBar'

export default function Home() {
  return (


    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={12}>
        <Paper
          sx={{
            bgcolor: '#1F2128',
            textAlign: 'center'
          }}
        >
          
          <Grid xs={12}>
            <h2>Home</h2>
          </Grid>
          <Grid xs={12}>
            <h3>Filtre por um ano no canto superior direito</h3>
          </Grid>
        </Paper>
      </Grid>
    </Grid >

  );
}