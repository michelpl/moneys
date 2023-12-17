import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import MyTableRow from '../components/InputRow.jsx';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function New() {
  return (
    <Box marginTop={5} padding={1} sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1}>
        <Grid xs={12}>

          <Paper>
            <CardContent>
              <Grid xs={12}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              </Grid>
              <Grid xs={12}>
                <MyTableRow />
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
