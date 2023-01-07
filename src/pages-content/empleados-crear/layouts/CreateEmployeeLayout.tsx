import { Box } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90%',
                width: '100%',
            }}
        >
            {children}
        </Box>
    );
};

const Form = ({
    children,
    onSubmit,
}: {
    children: ReactNode;
    onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
    return (
        <Box
            component='form'
            onSubmit={onSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: { xs: '100%', sm: '70%', md: '40%' },
            }}
        >
            {children}
        </Box>
    );
};

const CreateEmployeeLayout = { Container, Form };
export default CreateEmployeeLayout;
