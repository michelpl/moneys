import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import Actions from '../../../actions/TransactionFormActions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BottomActions({handleFormActions}) {
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
                        <Button
                            name='delete'
                            fullWidth={true}
                            variant='contained'
                            sx={{
                                backgroundColor: 'pink.secondary'
                            }}
                            onClick={() => {handleFormActions('delete')}}
                        >EXCLUIR
                        </Button>
                    </Grid>
                    <Grid container columnSpacing={1} xs={12} sm={5} sx={{ order: { xs: 12, sm: 2 } }}>
                        <Grid xs={12} sm={6}>
                            <Button
                                name='cancel'
                                fullWidth={true}
                                variant='outlined'
                                sx={{
                                    color: 'gray.primary',
                                    borderColor: 'gray.primary'
                                }}
                                onClick={() => {handleFormActions('cancel')}}
                            >FECHAR</Button>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Button 
                                name='save'
                                fullWidth={true} 
                                variant='contained'
                                onClick={() => {handleFormActions('save')}}
                            >SALVAR</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}




