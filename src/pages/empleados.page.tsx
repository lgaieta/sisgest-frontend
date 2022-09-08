import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import Main from '../layouts/Main';

function EmpleadosPage() {
    return (
        <Main title='Empleados'>
            <TableContainer component={Paper} variant='outlined'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombres</TableCell>
                            <TableCell>Apellidos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Luciano Gabriel</TableCell>
                            <TableCell>Aieta</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Luciano Gabriel</TableCell>
                            <TableCell>Aieta</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Luciano Gabriel</TableCell>
                            <TableCell>Aieta</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Main>
    );
}

export default EmpleadosPage;
