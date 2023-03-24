import { Stack, Typography, Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginField from '../components/LoginField';
import LoginData from '../utils/LoginData';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginValidationSchema from '../utils/LoginValidationSchema';
import LoginFormStyles from './LoginFormStyles';

function LoginForm() {
    const { handleSubmit, control } = useForm<LoginData>({
        defaultValues: { user: '', password: '' },
        resolver: zodResolver(LoginValidationSchema),
    });

    const handleOnFormSubmit: SubmitHandler<LoginData> = data => {
        console.log(data);
    };

    return (
        <Stack
            component='form'
            onSubmit={handleSubmit(handleOnFormSubmit)}
            sx={LoginFormStyles}
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
