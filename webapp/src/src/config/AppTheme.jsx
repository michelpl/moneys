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
    })
}