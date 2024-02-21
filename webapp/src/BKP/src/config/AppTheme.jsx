export default function AppTheme() {
    return ({
        palette: {
            mode: 'dark',
            primary: {
              main: '#7364db',
              contrastText: '#fafafa',
            },
            secondary: {
              main: '#2775ff',
              contrastText: '#fafafa',
            },
            background: {
              default: '#0c0b0b',
              secondary: '#27292f',
              paper: '#1f2128',
            },
            success: {
              main: '#00aa33',
            },
            text: {
              primary: '#fff',
              hint: '#fafafa',
              disabled: '#323131',
              secondary: '#bdbdbd',
            },
            error: {
              main: '#e23738',
              contrastText: '#000000',
              dark: '#9a292a',
            },
            warning: {
              main: '#fdd835',
            },
            pink: {
              main: '#ca4484',
              secondary: '#f95e5e'
            },
            gray: {
              primary: '#4B5ACE'
            },
            green: {
              500: '#50D1B2',
              secondary: '#50D1B2'
            },
            red: {
              primary: '#f95e5e'
            },
            blue: {
              primary: '#6B9FBC'
            },
            yellow: {
              primary: '#E2AB84'
            },
          },
          typography: {
            fontWeightLight: 300,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 800,
            h1: {
              fontWeight: 600,
              fontSize: '36px',
            },
            h2: {
              fontWeight: 600,
              fontSize: '24px',
            },
            h3: {
              fontSize: '20px',
              fontWeight: 400,
            },
            h4: {
              fontSize: '18px',
            },
            h5: {
              fontSize: '13px',
              fontWeight: 'bold'
            },
            h6: {
              fontSize: '12px',
            },
            p: {
              fontSize: '12px'
            },
            highlight: {
              fontSize: '18px'
            },
            span: {
              fontSize: '12px',
              fontWeight: 500
            }
          },
          shape: {
            borderRadius: 6,
          }
    })
}