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
              main: '#ca4484'
            }
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
              fontSize: '12px',
              fontWeight: 'bold'
            },
            h6: {
              fontSize: '14px',
            },
            p: {
              fontSize: '14px'
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
          },
    })
}
