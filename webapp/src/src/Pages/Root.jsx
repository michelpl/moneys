import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MyTopBar from '../components/MyTopBar'
import AppTheme from "../config/AppTheme";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme(AppTheme());

export default function Root() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <MyTopBar title={'Moneys'} subtitle={'Home'}></MyTopBar>
        </AppBar>
        <section>
          <Outlet />
        </section>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
