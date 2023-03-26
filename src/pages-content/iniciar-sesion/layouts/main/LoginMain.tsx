import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { LoginMainStyles } from './LoginMain.styles';

function LoginMain(props: { children: ReactNode }) {
    return <Box sx={LoginMainStyles}>{props.children}</Box>;
}

export default LoginMain;
