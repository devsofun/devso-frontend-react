import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'HYPixel !important',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    {
                        fontFamily: 'HYPixel',
                        src: `url('/HYPixel.ttf') format('truetype')`,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                    },
                ],
            },
        },
    },
});

export default theme;