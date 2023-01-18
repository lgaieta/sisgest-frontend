import { Grid, Stack } from '@mui/material';
import { ReactNode } from 'react';

function CreateContractButtonsContainer({ children }: { children: ReactNode }) {
    return (
        <Grid item xs>
            <Stack direction='row' justifyContent='end' gap={2}>
                {children}
            </Stack>
        </Grid>
    );
}

export default CreateContractButtonsContainer;
