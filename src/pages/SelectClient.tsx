import {
    TableRow,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material';
import Main from '../layouts/Main';

const ClientExamples = ['Intel', 'CRSSCH', 'Aieta Consulting'];

function SelectClient() {
    return (
        <Main title='Seleccione un cliente'>
            <TableContainer component={Paper} variant='outlined'>
                <Table>
                    <TableHead>
                        <TableCell>Nombre</TableCell>
                    </TableHead>
                    <TableBody>
                        {ClientExamples.map(client => (
                            <TableRow key={client}>
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
