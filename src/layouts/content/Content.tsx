import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { ContentStyles } from './Content.styles';

function Content({ children, sx }: { children: ReactNode; sx?: SxProps<Theme> }) {
    return (
        <Box component='main' sx={{ ...ContentStyles, ...sx } as SxProps<Theme>}>
            {children}
        </Box>
    );
}

export default Content;
