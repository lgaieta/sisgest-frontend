import { SxProps, Theme } from '@mui/material';

export const SidebarContainerStyles: (theme: Theme, open: boolean) => SxProps<Theme> = (
    theme,
    open
) => ({
    position: { xs: 'fixed', md: 'sticky' },
    top: 0,
    width: '100%',
    height: { xs: open ? '100vh' : 0, md: '100vh' },
    gridArea: 'sidebar',
    transition: 'height .3s ease',
    zIndex: 1200,
    '& .MuiDrawer-paper': {
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: { xs: open ? '1.5rem' : 0, md: '1.5rem' },
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
