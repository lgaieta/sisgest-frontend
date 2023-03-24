import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getPalette = (mode: PaletteMode): PaletteOptions => ({
    mode,
    ...(mode === 'light'
        ? {
              text: {
                  primary: grey[900],
                  secondary: grey[700],
                  primaryAlwaysDark: '#FFFFFF',
                  secondaryAlwaysDark: grey[100],
              },
              background: {
                  primary: '#FFFFFF',
                  secondary: grey[100],
                  primaryAlwaysDark: grey[800],
                  secondaryAlwaysDark: grey[700],
              },
              border: {
                  primary: grey[300],
              },
          }
        : {
              text: {
                  primary: '#FFFFFF',
                  secondary: grey[100],
                  primaryAlwaysDark: '#FFFFFF',
                  secondaryAlwaysDark: grey[100],
              },
              background: {
                  primary: grey[800],
                  secondary: grey[700],
                  primaryAlwaysDark: grey[800],
                  secondaryAlwaysDark: grey[700],
              },
              border: {
                  primary: grey[600],
              },
          }),
    primary: {
        main: '#f57f17',
        dark: '#ff6f00',
        contrastText: '#ffffff',
    },
    accent: {
        primary: '#F5D50D',
        primaryDark: '#EACC0D',
        primaryLight: '#FCDB0D',
        contrastText: grey[900],
    },
});

const mode: PaletteMode = 'light';

const SisGestTheme = responsiveFontSizes(
    createTheme({
        palette: getPalette(mode),
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '.5rem',
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    },
                    containedPrimary: {
                        color: getPalette(mode).accent.contrastText,
                        backgroundColor: getPalette(mode).accent.primary,
                        '&:hover': {
                            color: getPalette(mode).accent.contrastText,
                            backgroundColor: getPalette(mode).accent.primaryLight,
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        borderRadius: '.5rem .5rem 0 0',
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: '1rem',
                    },
                },
            },
        },
    })
);

export default SisGestTheme;
