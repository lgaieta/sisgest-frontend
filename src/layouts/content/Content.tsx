import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { ContentStyles } from './Content.styles';

function Content({ children }: { children: ReactNode }) {
    return (
        <Box component='main' sx={ContentStyles}>
            {children}
        </Box>
    );
}

export default Content;
