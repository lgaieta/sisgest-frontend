import { Grid } from '@mui/material';
import { ReactNode } from 'react';

function CreateContractContainer({ children }: { children: ReactNode }) {
    return (
        <Grid
            container
            width='100%'
            height='fit-content'
            rowSpacing={3}
            columnSpacing={3}
            columns={2}
        >
            {children}
        </Grid>
    );
}

export default CreateContractContainer;
