import { Typography } from '@mui/material';
import { ReactNode } from 'react';

function ErrorMessage(props: { children: ReactNode }) {
    return (
        <Typography color='error' variant='subtitle1'>
            {props.children}
        </Typography>
    );
}

export default ErrorMessage;
