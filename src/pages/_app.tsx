import { Box, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { FC, useState } from 'react';
import Sidebar from '../layouts/Sidebar';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    const [client, setClient] = useState<string | null>('Visma');
    return (
        <>
            <CssBaseline />
            <Box>
                <Sidebar client={client} setClient={setClient} />
                <Component setClient={setClient} {...pageProps} />
            </Box>
        </>
    );
};

export default CustomApp;
