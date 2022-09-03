import { Box, AppBar, Typography, Toolbar } from '@mui/material';
import { ReactNode } from 'react';

type MainProps = {
    title: string;
    children: ReactNode;
};

function Main(props: MainProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '13rem',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <AppBar
                component='header'
                sx={{
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    borderLeft: 'none',
                }}
                elevation={0}
                position='sticky'
                variant='outlined'
            >
                <Toolbar>
                    <Typography variant='h4' component='h1' sx={{ fontWeight: '500' }}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: '100%', padding: '1.5rem' }}>{props.children}</Box>
        </Box>
    );
}

export default Main;
