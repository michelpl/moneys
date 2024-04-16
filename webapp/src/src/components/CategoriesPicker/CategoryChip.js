/* eslint-disable react/prop-types */
import * as React from 'react';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';
import {Chip, Typography} from '@mui/material';
import Avatar from "@mui/material/Avatar";

export default function CategoryChip({data, tagProps}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: data.backgroundColor,
            },

        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Chip
                key={data.id}
                avatar={<Avatar alt={data.label} src={data.img}/>}
                color={'primary'}
                variant="filled"
                label={data.label}
                size="small"
                title={data.label}
                {...tagProps}
                sx={{maxWidth: '180px', minWidth: '20px', overflow: 'hidden'}}
            />
        </ThemeProvider>
    );
}
