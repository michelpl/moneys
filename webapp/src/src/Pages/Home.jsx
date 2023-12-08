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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MonthCard from '../components/MonthCard';
import { Paper } from '@mui/material';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MyTopBar from '../components/MyTopBar'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

export default function Home() {
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

  const year = '2023';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <MyTopBar  title={ 'Moneys' } subtitle = { 'Home' }></MyTopBar>
      </AppBar>
      <Paper
        sx={{
          bgcolor: '#1F2128'
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Home
              <a href={'/month'}>Your Name</a>
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              2023
            </Typography>
           
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing='2'
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }}>

          <Grid container spacing={4}>
            {
              
              cards.map((month, order) => {
                return (
                  <Grid item key={order} xs={12} sm={6} md={4} lg={4}>
                      <MonthCard month={month} year={ year } />
                  </Grid>
                )
              })
            }
          </Grid>
        </Container>
      </Paper>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}