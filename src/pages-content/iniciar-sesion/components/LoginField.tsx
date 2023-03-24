import { TextField, TextFieldProps } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';
import LoginData from '../utils/LoginData';

function LoginField(props: LoginFieldProps) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: props.name, control: props.control });

    return (
        <TextField
            variant='outlined'
            error={!!error}
            helperText={error?.message || null}
            sx={{
                width: '100%',
                borderRadius: '1rem',
                '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.primary',
                },
            }}
            inputRef={field.ref}
            {...field}
            {...props}
        />
    );
}

type LoginFieldProps = Partial<TextFieldProps> & UseControllerProps<LoginData>;

export default LoginField;
