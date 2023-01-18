import { grey, blue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const SisGestTheme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: blue[700],
            },
            secondary: {
                main: grey[800],
            },
            background: {
                default: grey[50],
            },
        },
    })
);

export default SisGestTheme;
