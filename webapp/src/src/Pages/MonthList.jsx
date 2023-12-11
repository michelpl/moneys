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
import { useParams } from 'react-router-dom';

export default function MonthList() {
  const cards = [
    { id: 1, name: 'janeiro' },
    { id: 2, name: 'fevereiro' },
    { id: 3, name: 'março' },
    { id: 4, name: 'abril' },
    { id: 5, name: 'maio' },
    { id: 6, name: 'junho' },
    { id: 7, name: 'julho' },
    { id: 8, name: 'agosto' },
    { id: 9, name: 'setembro' },
    { id: 10, name: 'outubro' },
    { id: 11, name: 'novembro' },
    { id: 12, name: 'dezembro' }
  ]

  function HeaderView() {
    const location = useParams();
    return location.year;
  }
  return (

    <Paper
      sx={{
        bgcolor: '#1F2128'
      }}
    >
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} textAlign={'center'}>
            <h3>Orçamento mensal { HeaderView() }</h3>
          </Grid>
        
          {
            cards.map((month, order) => {
              return (
                <Grid item key={order} xs={12} sm={6} md={4} lg={4}>
                  <MonthCard month={month} year={ HeaderView() } />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Paper>

  );
}