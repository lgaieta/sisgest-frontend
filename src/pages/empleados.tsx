import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import Main from '../layouts/Main';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import ReplayIcon from '@mui/icons-material/Replay';
import { useQuery } from 'react-query';
import adaptEmployee from '../adapters/adaptEmployee';
import { getEmployees } from '../services/getEmployees';
import useDeleteEmployee from '../hooks/useDeleteEmployee';
import useLoadEmployees from '../hooks/useLoadEmployees';

function EmpleadosPage() {
    const { data: employeesList, isLoading, isError, refetch } = useLoadEmployees();
    const { mutate: deleteEmployee } = useDeleteEmployee();

    return (
        <Main
            title='Empleados'
            headerContent={() => (
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Tooltip title='Recargar empleados'>
                        <IconButton onClick={() => refetch()}>
                            <ReplayIcon />
                        </IconButton>
                    </Tooltip>
                    <Button variant='outlined'>Crear Empleado</Button>
                </Box>
            )}
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
            {isError && (
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
                                                    deleteEmployee(employee.id, {
                                                        onSuccess: () => refetch(),
                                                    });
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
            {/* <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isEmployeeDeleted}
                message='Empleado borrado'
                action={
                    <IconButton
                        size='small'
                        aria-label='close'
                        color='inherit'
                        onClick={() => setIsEmployeeDeleted(false)}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                }
            /> */}
        </Main>
    );
}

export default EmpleadosPage;
