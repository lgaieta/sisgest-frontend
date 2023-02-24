import { SxProps, Theme } from '@mui/material';

export const MainContainerStyles: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: '13rem 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: {
        xs: "'header header' 'content content'",
        md: "'sidebar header' 'sidebar content'",
    },
    minHeight: '100vh',
    color: 'text.primary',
    bgcolor: 'background.primary',
};
