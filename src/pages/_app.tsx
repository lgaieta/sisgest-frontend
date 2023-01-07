import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import SisGestTheme from '../utils/SisGestTheme';
import useSidebar from '../hooks/useSidebar';

const queryClient = new QueryClient();

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const sidebarProps = useSidebar();

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
                    <Component sidebarProps={sidebarProps} {...pageProps} />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
};

export default CustomApp;
