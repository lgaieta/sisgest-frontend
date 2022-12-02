import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { FC } from 'react';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
};

export default CustomApp;
