import {
    TableRow,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import Main from '../layouts/Main';

const ClientExamples = ['Intel', 'CRSSCH', 'Aieta Consulting'];

type SelectClientProps = {
    setClient: Dispatch<SetStateAction<string | null>>;
};

function SelectClient(props: SelectClientProps) {
    const { setClient } = props;

    return (
        <Main title='Seleccione un cliente - SisGest' fullWidth>
            <TableContainer component={Paper} variant='outlined'>
                <Table>
                    <TableHead>
                        <TableCell>Nombre</TableCell>
                    </TableHead>
                    <TableBody>
                        {ClientExamples.map(client => (
                            <TableRow
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: '#F3F3F3' },
                                }}
                                onClick={() => setClient(client)}
                                key={client}
                            >
                                <TableCell>{client}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Main>
    );
}

export default SelectClient;
