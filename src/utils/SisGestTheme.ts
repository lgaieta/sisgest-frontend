import { PaletteMode } from '@mui/material';
import { grey, indigo } from '@mui/material/colors';
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
        main: indigo[600],
        dark: indigo[800],
        contrastText: '#FFFFFF',
    },
    accent: {
        primary: indigo[600],
        primaryDark: indigo[800],
        contrastText: '#FFFFFF',
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
