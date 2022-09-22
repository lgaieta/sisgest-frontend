import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import useLoadEmployees from '../hooks/useLoadEmployees';
import Main from '../layouts/Main';

function EmpleadosPage() {
    const { employeesList, error, isLoading } = useLoadEmployees();

    return (
        <Main
            title='Empleados'
            headerContent={() => <Button variant='outlined'>Crear Empleado</Button>}
        >
            <TableContainer component={Paper} variant='outlined'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombres</TableCell>
                            <TableCell>Apellidos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeesList &&
                            employeesList.map(employee => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.names}</TableCell>
                                    <TableCell>{employee.surnames}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Main>
    );
}

export default EmpleadosPage;
