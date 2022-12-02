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
import useLoadEmployees from '../hooks/useLoadEmployees';
import Main from '../layouts/Main';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import useDeleteEmployee from '../hooks/useDeleteEmployee';
import ReplayIcon from '@mui/icons-material/Replay';

function EmpleadosPage() {
    const { employeesList, error, isLoading, executeLogic } = useLoadEmployees();
    const { isEmployeeDeleted, deleteEmployee, setIsEmployeeDeleted } = useDeleteEmployee(
        {
            loadEmployees: executeLogic,
        }
    );

    return (
        <Main
            title='Empleados'
            headerContent={() => (
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Tooltip title='Recargar empleados'>
                        <IconButton onClick={() => executeLogic({ showLoad: false })}>
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
            <Snackbar
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
            />
        </Main>
    );
}

export default EmpleadosPage;
