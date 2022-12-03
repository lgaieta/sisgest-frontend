import { Box, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useState } from 'react';
import Sidebar from '../layouts/Sidebar';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    const [client, setClient] = useState<string | null>('Visma');
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <CssBaseline />
            <Box>
                <Sidebar client={client} setClient={setClient} />
                <Component setClient={setClient} {...pageProps} />
            </Box>
        </>
    );
};

export default CustomApp;
