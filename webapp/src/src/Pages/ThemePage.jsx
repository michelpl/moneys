import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Button, Container, Divider, Fab, Grid, Link, Paper, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ThemePage() {
  return (
    <Paper>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <h2>Home</h2>
        </Grid>

        <Stack spacing={2} direction="row" sx={{ marginBottom: 5 }}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Grid container sx={{ marginBottom: 5 }} >
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </Grid>
        <Grid container sx={{ marginBottom: 5 }} >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Grid>
        <Divider sx={{ marginBottom: 5 }} />
        <Grid container sx={{ marginBottom: 5 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Grid>
        <Grid container sx={{ marginBottom: 5 }}>
          <Link to="#">LINK</Link>
          <a href='#'>LINK ClÁSSICO</a>
        </Grid>
      </Container>
    </Paper>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];
