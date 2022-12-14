import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import Main from '../layouts/Main';
import Tooltip from '@mui/material/Tooltip';
import ReplayIcon from '@mui/icons-material/Replay';
import useDeleteEmployee from '../hooks/useDeleteEmployee';
import useLoadEmployees from '../hooks/useLoadEmployees';
import { lazy, Suspense, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const EmployeesTable = lazy(() => import('../components/EmployeesTable'));
const ErrorMessage = lazy(() => import('../components/ErrorMessage'));
const Snackbar = lazy(() => import('@mui/material/Snackbar'));

function EmpleadosPage() {
    const { data: employeesList, isLoading, isError, refetch } = useLoadEmployees();
    const { mutate: deleteEmployee } = useDeleteEmployee();
    const [hasEmployeeBeenDeleted, setHasEmployeeBeenDeleted] = useState<boolean>(false);

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
            {isLoading ? (
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
            ) : (
                <Suspense
                    fallback={
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
                    }
                >
                    {isError && (
                        <ErrorMessage>
                            Ha ocurrido un error. Por favor, recargue la página (tecla
                            F5).
                        </ErrorMessage>
                    )}
                    {employeesList && (
                        <EmployeesTable
                            employees={employeesList}
                            onDeleteEmployee={id => {
                                deleteEmployee(id, {
                                    onSuccess: () => {
                                        refetch();
                                        setHasEmployeeBeenDeleted(true);
                                    },
                                });
                            }}
                        />
                    )}
                </Suspense>
            )}
            {/* Deleted employee snackbar */}
            <Suspense>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={hasEmployeeBeenDeleted}
                    message='Empleado borrado'
                    action={
                        <IconButton
                            size='small'
                            aria-label='close'
                            color='inherit'
                            onClick={() => setHasEmployeeBeenDeleted(false)}
                        >
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    }
                />
            </Suspense>
        </Main>
    );
}

export default EmpleadosPage;
