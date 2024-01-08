import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TransactionActions({handleClick}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} padding={2}>
                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    sx={{ fontSize: '12px' }}
                >
                    <Grid xs={12} sm={2} sx={{ order: { xs: 12, sm: 1 } }}>
                        <Typography variant='h5'>Saldo: R$ 10.000,00</Typography>
                    </Grid>
                    <Grid container columnSpacing={1} xs={12} sm={2} sx={{ order: { xs: 12, sm: 2 } }}>
                            <Button 
                                name='save'
                                fullWidth={true} 
                                variant='contained'
                            >+ Adiconar</Button>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}




