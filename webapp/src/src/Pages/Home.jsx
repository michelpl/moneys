import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <RequestPageIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Moneys | Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
                sx={{
                  bgcolor: '#1F2128'
                }}
      >
        {/* Hero unit */}
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
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4} lg={4}>
              <MonthCard />
            </Grid>
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