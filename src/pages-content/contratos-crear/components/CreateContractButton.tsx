import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

type CreateContractButtonProps = {
    children: ReactNode;
} & ButtonProps;

function CreateContractButton(props: CreateContractButtonProps) {
    const { children, ...restProps } = props;

    return (
        <Button size='large' sx={{ width: { xs: '100%', md: 'auto' } }} {...restProps}>
            {children}
        </Button>
    );
}

export const CreateContractReturnButton = ({
    children,
    ...props
}: CreateContractButtonProps) => (
    <CreateContractButton variant='text' sx={{ color: 'text.primary' }} {...props}>
        {children}
    </CreateContractButton>
);

export const CreateContractContinueButton = ({
    children,
    ...props
}: CreateContractButtonProps) => (
    <CreateContractButton variant='contained' type='submit' {...props}>
        {children}
    </CreateContractButton>
);

export default CreateContractButton;
