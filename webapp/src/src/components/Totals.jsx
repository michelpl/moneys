import * as React from 'react';
import { Box, Button, Card, CardContent, Grid, List, Stack, Typography } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import InsertChartIcon from '@mui/icons-material/InsertChart';

export default function Totals({ label, total }) {
    const chooseColor = () => {
        if (total < 0) {
            return 'red.primary';
        }
        return 'green.secondary';
    }

    return (
        <>
            <Box>
                <Grid spacing={2} container sx={{ marginTop: 2, marginBottom: 5 }} justifyContent="flex-end">
                    <Grid item sm={3}>
                        <Card>
                            <CardContent sx={{ backgroundColor: 'background.paper' }}>

                                <Typography variant='h5' textAlign={'right'} gutterBottom>
                                    {label}
                                </Typography>
                                <div style={{ width: '100%', textAlign: 'right' }}>
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        spacing={1}
                                        sx={{color: chooseColor() }}
                                    >
                                        <InsertChartIcon />
                                        <Typography variant='h5' component={'span'}>
                                        <NumericFormat
                                            value={total}
                                            thousandSeparator='.'
                                            decimalSeparator=','
                                            displayType="text"
                                            decimalScale='2'
                                            allowNegative={true}
                                            fixedDecimalScale={true}
                                            prefix='R$ '
                                        />
                                        </Typography>
                                    </Stack>


                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}