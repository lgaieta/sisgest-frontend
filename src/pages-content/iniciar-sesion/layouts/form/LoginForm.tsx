import { Stack, Typography, Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginField from '../../components/LoginField';
import LoginData from '../../utils/LoginData';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginValidationSchema from '../../utils/LoginValidationSchema';
import LoginFormStyles from './LoginForm.styles';
import useLogin from '../../hooks/useLogin';
import { useRouter } from 'next/router';
import { SetStateAction, Dispatch } from 'react';

function LoginForm(props: { setIsLogged: Dispatch<SetStateAction<string>> }) {
    const { handleSubmit, control } = useForm<LoginData>({
        defaultValues: { user: '', password: '' },
        resolver: zodResolver(LoginValidationSchema),
    });

    const router = useRouter();
    const { mutate: login, isError } = useLogin();

    const handleOnFormSubmit: SubmitHandler<LoginData> = data =>
        login(data, {
            onSuccess: () => {
                props.setIsLogged('true');
                router.push('/seleccionar-cliente');
            },
        });

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
            {isError && (
                <Typography
                    variant='body1'
                    sx={{ fontWeight: 500, color: 'error.main', textAlign: 'center' }}
                >
                    Ha ocurrido un error, por favor intente de nuevo.
                </Typography>
            )}
        </Stack>
    );
}

export default LoginForm;
