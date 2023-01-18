import { Grid, Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';

type CreateContractDividerProps = {
    children: ReactNode;
};

function CreateContractDivider(props: CreateContractDividerProps) {
    return (
        <Grid item xs={2}>
            <Divider component='div' textAlign='left'>
                <Typography variant='h6'>{props.children}</Typography>
            </Divider>
        </Grid>
    );
}

export default CreateContractDivider;
