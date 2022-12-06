import {
    TableRow,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material';
import Link from 'next/link';
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
                        <TableCell>Empresa</TableCell>
                    </TableHead>
                    <TableBody>
                        {ClientExamples.map(client => (
                            <TableRow
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    '&:hover': { bgcolor: '#F3F3F3' },
                                }}
                                component={Link}
                                href='/'
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