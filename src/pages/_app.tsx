import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Sidebar from '../layouts/Sidebar';
import { useClientSelector } from '../hooks/useClientSelector';
import { QueryClient, QueryClientProvider } from 'react-query';
import SisGestTheme from '../utils/SisGestTheme';

const queryClient = new QueryClient();

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const [client, setClient] = useClientSelector();
    const router = useRouter();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0'
                    />
                </Head>
                <ThemeProvider theme={SisGestTheme}>
                    <CssBaseline />
                    <Box>
                        {router.pathname !== '/seleccionar-cliente' ? (
                            <Sidebar client={client} setClient={setClient} />
                        ) : null}
                        <Component setClient={setClient} {...pageProps} />
                    </Box>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
};

export default CustomApp;
