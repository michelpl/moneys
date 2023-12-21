import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import InputRow from '../components/InputRow.jsx';
import '@fontsource/roboto/700.css';

const MyCard = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: 10
}));

export default function New() {
  return (
    <Box marginTop={5} padding={1}>
      <Grid container spacing={1} columns={12}>
        <Grid xs={9}>
          <Box>
            <MyCard>
              <CardContent sx={{ backgroundColor: 'primary.surface' }}>
                <Grid xs={12}>
                  <Typography variant='subtitle2' gutterBottom textAlign={'left'} component="div">
                    <strong>Inputs</strong>
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <List sx={{padding: 0, width: '100%' }}>
                    <InputRow ></InputRow>
                  </List>
                </Grid>
              </CardContent>
            </MyCard>
          </Box>
        </Grid>
        <Grid xs={3}>
          <MyCard>COLUNA 2</MyCard>
        </Grid>
      </Grid>
    </Box>
  );
}
