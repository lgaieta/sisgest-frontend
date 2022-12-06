import { Box, CssBaseline } from '@mui/material';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useState, useEffect } from 'react';
import Sidebar from '../layouts/Sidebar';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    const [client, setClient] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!client && router.pathname !== '/seleccionar-cliente')
            router.push('/seleccionar-cliente');
    });

    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <CssBaseline />
            <Box>
                {router.pathname !== '/seleccionar-cliente' ? (
                    <Sidebar client={client} setClient={setClient} />
                ) : null}
                <Component setClient={setClient} {...pageProps} />
            </Box>
        </>
    );
};

export default CustomApp;
