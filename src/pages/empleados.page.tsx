import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import useLoadEmployees from '../hooks/useLoadEmployees';
import Main from '../layouts/Main';
import DeleteIcon from '@mui/icons-material/Delete';
import Employee from '../entities/Employee.entity';
import Tooltip from '@mui/material/Tooltip';

function EmpleadosPage() {
    const { employeesList, error, isLoading, executeLogic } = useLoadEmployees();
    const deleteEmployee = async (id: Employee['id']) => {
        await fetch('http://localhost:7000/empleado/' + id, {
            method: 'DELETE',
        });
        executeLogic({ showLoad: false });
    };

    return (
        <Main
            title='Empleados'
            headerContent={() => <Button variant='outlined'>Crear Empleado</Button>}
        >
            {isLoading && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '8rem',
                        marginTop: '-1.5rem',
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            {error && (
                <Typography color='error' variant='subtitle1'>
                    Ha ocurrido un error. Por favor, recargue la página.
                </Typography>
            )}
            {employeesList && (
                <TableContainer component={Paper} variant='outlined'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombres</TableCell>
                                <TableCell>Apellidos</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employeesList.map(employee => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.names}</TableCell>
                                    <TableCell>{employee.surnames}</TableCell>
                                    <TableCell>
                                        <Tooltip title='Borrar'>
                                            <DeleteIcon
                                                onClick={() => {
                                                    deleteEmployee(employee.id);
                                                }}
                                            />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Main>
    );
}

export default EmpleadosPage;
