import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '8rem',
                marginTop: '-1.5rem',
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingSpinner;
