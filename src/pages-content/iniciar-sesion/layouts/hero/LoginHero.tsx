import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Link from 'next/link';
import { LoginHeroContainerStyles, LoginHeroTitleStyles } from './LoginHero.styles';

function LoginHero() {
    const theme = useTheme();

    return (
        <Stack sx={LoginHeroContainerStyles}>
            <Typography variant='h2' component='h1' sx={LoginHeroTitleStyles}>
                SisGest
            </Typography>
            <Typography
                variant='subtitle1'
                component='p'
                sx={{ color: 'text.secondary', textAlign: 'center' }}
            >
                Aplicación de Gestión de Recursos Humanos
            </Typography>
            <Typography variant='subtitle2' sx={{ position: 'absolute', bottom: '2rem' }}>
                Desarrollado por{' '}
                <Link href='#' style={{ color: theme.palette.text.primary }}>
                    Aieta Consulting
                </Link>
            </Typography>
        </Stack>
    );
}

export default LoginHero;
