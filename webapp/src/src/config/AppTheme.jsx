import { green, red } from "@mui/material/colors";

export default function AppTheme() {
    return ({
        palette: {
            mode: 'dark',
            primary: {
                main: '#7364DB',
                light: '#42a5f5',
                dark: '#1565c0',
                contrastText: '#fff',
                background: {
                    body: "#fff"
                }
            },

        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 2590,
            },
        },
    })
}