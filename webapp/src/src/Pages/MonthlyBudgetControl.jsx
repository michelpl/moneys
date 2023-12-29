import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, Typography } from '@mui/material';
import TransactionList from '../components/Transaction/TransactionList';

export default function MonthlyBudgetControl() {
  return (
    <Box marginTop={5} padding={1}>
      <Grid container spacing={1} columns={12}>
        <Grid xs={12}>
          <Typography variant='H2'>Controle de orçamento mensal</Typography>
          </Grid>
        <Grid xs={12} sm={8}>
          <Box>
            <Card>
              <CardContent sx={{ backgroundColor: 'background.paper' }}>
                <Grid xs={12}>
                  <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                    <h2>Saídas</h2>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <TransactionList />
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid xs={3}>
          <Card>COLUNA 2</Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Box>
            <Card>
              <CardContent sx={{ backgroundColor: 'background.paper' }}>
                <Grid xs={12}>
                  <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                    <h2>Saídas</h2>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <TransactionList />
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
