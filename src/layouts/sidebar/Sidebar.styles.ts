import { SxProps, Theme } from '@mui/material';

export const SidebarContainerStyles: (theme: Theme, open: boolean) => SxProps<Theme> = (
    theme,
    open
) => ({
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    gridArea: 'sidebar',
    transition: 'height .3s ease',
    '& .MuiDrawer-paper': {
        position: 'relative',
        boxSizing: 'border-box',
        alignItems: { xs: 'center', md: 'inherit' },
        paddingTop: '1.5rem',
        paddingInline: '1rem',
        color: theme.palette.primary.contrastText,
        bgcolor: theme.palette.primary.main,
    },
});

export const SidebarTitleStyles: SxProps<Theme> = {
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    color: 'inherit',
    textDecoration: 'none',
    marginBottom: '1.5rem',
};

export const SidebarNavigationItemButtonStyles = {
    width: '100%',
    borderRadius: '.5rem',
};
