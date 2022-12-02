import { Box, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { FC, SetStateAction } from 'react';
import Sidebar from '../layouts/Sidebar';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <CssBaseline />
            <Box>
                <Sidebar
                    client={''}
                    setClient={function (value: SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    }}
                />
                <Component {...pageProps} />
            </Box>
        </>
    );
};

export default CustomApp;
