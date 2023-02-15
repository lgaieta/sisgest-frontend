import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const ContentStyles: SxProps<Theme> = {
    width: '100%',
    maxWidth: { md: 'calc(100vw - 13rem)' },
    height: '100%',
    gridArea: 'content',
    padding: '1.5rem',
    boxSizing: 'border-box',
};
