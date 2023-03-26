import { SxProps, Theme } from '@mui/material';

export const LoginMainStyles: SxProps<Theme> = theme => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr',
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: '1fr',
        height: '100vh',
    },
});
