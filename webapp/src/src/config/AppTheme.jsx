import { green, red } from "@mui/material/colors";

export default function AppTheme() {
    return ({
        palette: {
            mode: 'dark',
            primary: {
                main: '#7364DB',
                light: '#42a5f5',
                dark: '#1F2128',
                surface: '#1F2128',
                contrastText: '#64646f',
                text: {
                    primary: '#eae1e1'
                },
                background: {
                    body: "#000",
                    secondary: "#1F2128"
                }
            },
            success: {
                main: '#50D1B2'
            },
            text: {
                primary: "#eae1e1",
                secondary: "#8b8b93"
            }

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