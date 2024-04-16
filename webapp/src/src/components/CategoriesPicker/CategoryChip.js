/* eslint-disable react/prop-types */
import * as React from 'react';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';
import {Chip, Typography} from '@mui/material';
import Avatar from "@mui/material/Avatar";

export default function CategoryChip({data, tagProps, key}) {
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
                key={key}
                avatar={<Avatar alt={data.title} src={data.img}/>}
                color={'primary'}
                variant="filled"
                label={data.title}
                size="small"
                title={data.title}
                {...tagProps}
                sx={{maxWidth: '50px', minWidth: '20px', overflow: 'hidden'}}
            />
        </ThemeProvider>
    );
}
