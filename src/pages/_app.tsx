import { Box, CssBaseline } from '@mui/material';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Sidebar from '../layouts/Sidebar';
import { useClientSelector } from '../hooks/useClientSelector';

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const [client, setClient] = useClientSelector();

    const router = useRouter();

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
