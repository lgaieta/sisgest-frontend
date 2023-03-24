import { Stack, Typography, TextField, Button } from '@mui/material';

function LoginForm() {
    return (
        <Stack
            component='form'
            sx={{
                gap: 3,
                px: 6,
                justifyContent: 'center',
                bgcolor: 'background.secondary',
                borderLeft: '1px solid',
                borderColor: 'border.primary',
            }}
        >
            <Typography variant='h4' component='h2' fontWeight={700}>
                Iniciar sesión
            </Typography>
            <TextField
                label='Usuario'
                sx={{
                    width: '100%',
                    bgcolor: 'background.primary',
                    borderRadius: '1rem',
                }}
            />
            <TextField
                label='Contraseña'
                sx={{
                    width: '100%',
                    bgcolor: 'background.primary',
                    borderRadius: '1rem',
                }}
            />
            <Button
                variant='contained'
                size='large'
                sx={{ fontSize: '1rem', py: '.75rem' }}
            >
                Ingresar
            </Button>
        </Stack>
    );
}

export default LoginForm;
