import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import LoginForm from '../pages-content/iniciar-sesion/layouts/LoginForm';

function LoginPage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr 1fr',
                minHeight: '100vh',
                [theme.breakpoints.up('md')]: {
                    gridTemplateColumns: '2fr 1fr',
                    gridTemplateRows: '1fr',
                    height: '100vh',
                },
            }}
        >
            <Head>
                <title>Iniciar sesión - SisGest</title>
            </Head>
            <Stack
                sx={{
                    minHeight: '20rem',
                    position: 'relative',
                    bgcolor: 'background.primary',
                    p: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{ color: 'text.primary', fontWeight: 700, textAlign: 'center' }}
                >
                    SisGest
                </Typography>
                <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{ color: 'text.secondary', textAlign: 'center' }}
                >
                    Aplicación de Gestión de Recursos Humanos
                </Typography>
                <Typography
                    variant='subtitle2'
                    sx={{ position: 'absolute', bottom: '2rem' }}
                >
                    Desarrollado por{' '}
                    <Link href='#' style={{ color: theme.palette.text.primary }}>
                        Aieta Consulting
                    </Link>
                </Typography>
            </Stack>
            <LoginForm />
        </Box>
    );
}

export default LoginPage;
