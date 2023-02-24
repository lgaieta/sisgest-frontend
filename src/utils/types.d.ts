import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        primary: string;
        secondary: string;
        primaryAlwaysDark: string;
        secondaryAlwaysDark: string;
    }

    interface TypeText {
        primaryAlwaysDark: string;
        secondaryAlwaysDark: string;
    }

    interface PaletteOptions {
        border: {
            primary: string;
        };
        accent: {
            primary: string;
            primaryDark: string;
            contrastText: string;
        };
    }

    interface Palette {
        border: {
            primary: string;
        };
        accent: {
            primary: string;
            primaryDark: string;
            contrastText: string;
        };
    }
}
