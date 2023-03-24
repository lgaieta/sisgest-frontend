import { TextField, TextFieldProps } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';
import LoginData from '../utils/LoginData';

function LoginField(props: LoginFieldProps) {
    const { field } = useController({ name: props.name, control: props.control });

    return (
        <TextField
            variant='outlined'
            sx={{
                width: '100%',
                bgcolor: 'background.primary',
                borderRadius: '1rem',
            }}
            inputRef={field.ref}
            {...field}
            {...props}
        />
    );
}

type LoginFieldProps = Partial<TextFieldProps> & UseControllerProps<LoginData>;

export default LoginField;
