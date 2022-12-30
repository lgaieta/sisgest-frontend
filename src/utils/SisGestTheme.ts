import { grey, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const SisGestTheme = createTheme({
    palette: {
        primary: {
            main: pink[600],
        },
        secondary: {
            main: grey[800],
        },
        background: {
            default: grey[50],
        },
    },
});

export default SisGestTheme;
