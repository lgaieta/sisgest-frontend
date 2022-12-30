import { Box, AppBar, Typography, Toolbar } from '@mui/material';
import { ReactNode } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import ErrorBoundary from '../utils/ErrorBoundary';

type MainProps = {
    title: string;
    fullWidth?: boolean;
    children: ReactNode;
    headerContent?: () => ReactNode;
    hideHeader?: boolean;
};

function Main(props: MainProps) {
    const { fullWidth = false, hideHeader = false } = props;

    return (
        <ErrorBoundary
            fallbackComponent={
                <ErrorMessage>
                    Ha ocurrido un error al cargar la vista, por favor recargue la página.
                </ErrorMessage>
            }
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: fullWidth ? '0' : '13rem',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {hideHeader === true ? null : (
                    <AppBar
                        component='header'
                        sx={{
                            bgcolor: 'secondary.main',
                            color: 'secondary.contrastText',
                            borderLeft: 'none',
                        }}
                        elevation={0}
                        position='sticky'
                        variant='outlined'
                    >
                        <Toolbar
                            sx={{
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                variant='h4'
                                component='h1'
                                sx={{ fontWeight: '500' }}
                            >
                                {props.title}
                            </Typography>
                            {props.headerContent && props.headerContent()}
                        </Toolbar>
                    </AppBar>
                )}
                <Box
                    sx={{
                        width: '100',
                        minHeight: '100vh',
                        padding: '1.5rem',
                        bgcolor: 'background.default',
                    }}
                >
                    {props.children}
                </Box>
            </Box>
        </ErrorBoundary>
    );
}

export default Main;
