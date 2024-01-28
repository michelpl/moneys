import * as React from 'react';
import Grid from '@mui/material/Grid';
import MonthCard from '../components/MonthCard';
import { Box, Typography } from '@mui/material';
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
    <Box marginTop={5} padding={1}>
      <Typography variant='H2' paddingLeft={3}>Orçamento mensal {HeaderView()}</Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        padding={3}
      >
        {
          cards.map((month, order) => {
            return (
              <Grid item key={order} xs={12} md={4} lg={3} >
                <MonthCard month={month} year={HeaderView()} />
              </Grid>
            )
          })
        }

      </Grid>
    </Box>
  );
}