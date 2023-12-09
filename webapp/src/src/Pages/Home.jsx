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
    <Paper
      sx={{
        bgcolor: '#1F2128'
      }}
    >
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <h2>Home</h2>
        </Grid>
      </Container>
    </Paper>

  );
}