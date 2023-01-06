import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import ErrorBoundary from '../../utils/ErrorBoundary';
import { MainContainerStyles } from './Main.styles';

type MainProps = {
    children: ReactNode;
    sx?: SxProps<Theme> | undefined;
};

function Main({ children, sx = {} }: MainProps) {
    return (
        <ErrorBoundary
            fallbackComponent={
                <ErrorMessage>
                    Ha ocurrido un error al cargar, por favor recargue la página.
                </ErrorMessage>
            }
        >
            <Box sx={{ ...MainContainerStyles, ...sx } as SxProps<Theme>}>{children}</Box>
        </ErrorBoundary>
    );
}

export default Main;
