import { Box } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90%',
                width: '80%',
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
                width: '40%',
            }}
        >
            {children}
        </Box>
    );
};

const CreateEmployeeLayout = { Container, Form };
export default CreateEmployeeLayout;
