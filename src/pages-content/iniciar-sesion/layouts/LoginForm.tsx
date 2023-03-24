import { Stack, Typography, Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginField from '../components/LoginField';
import LoginData from '../utils/LoginData';

function LoginForm() {
    const { handleSubmit, control } = useForm<LoginData>({
        defaultValues: { user: '', password: '' },
    });

    const handleOnFormSubmit: SubmitHandler<LoginData> = data => {
        console.log(data);
    };

    return (
        <Stack
            component='form'
            onSubmit={handleSubmit(handleOnFormSubmit)}
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
            <LoginField label='Usuario' control={control} name='user' />
            <LoginField label='Contraseña' control={control} name='password' />
            <Button
                variant='contained'
                size='large'
                type='submit'
                sx={{ fontSize: '1rem', py: '.75rem' }}
            >
                Ingresar
            </Button>
        </Stack>
    );
}

export default LoginForm;
