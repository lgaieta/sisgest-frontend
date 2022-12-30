import { createTheme } from '@mui/material/styles';

const SisGestTheme = createTheme({
    palette: {
        primary: {
            light: '#5e92f3',
            main: '#1565c0',
            dark: '#003c8f',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#6ab7ff',
            main: '#1e88e5',
            dark: '#005cb2',
            contrastText: '#000000',
        },
    },
});

export default SisGestTheme;
