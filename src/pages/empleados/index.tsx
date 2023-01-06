import { IconButton } from '@mui/material';
import Main from '../../layouts/main/Main';
import { lazy, Suspense } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EmployeeListTagsWithKeys from '../../pages-content/empleados/utils/EmployeeListTagsWithKeys';
import Head from 'next/head';
import LoadingSpinner from '../../pages-content/empleados/components/EmployeeLoadingSpinner';
import useEmployee from '../../pages-content/empleados/hooks/useEmployee';
import EmployeeHeader from '../../pages-content/empleados/layouts/EmployeeHeader';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import Content from '../../layouts/content/Content';

const EmployeesTable = lazy(
    () => import('../../pages-content/empleados/components/EmployeesTable')
);
const ErrorMessage = lazy(() => import('../../components/ErrorMessage'));
const Snackbar = lazy(() => import('@mui/material/Snackbar'));
const EmployeeDetailsDialog = lazy(
    () =>
        import(
            '../../pages-content/empleados/components/details-dialog/EmployeeDetailsDialog'
        )
);

function EmployeesPage({ sidebarProps }: { sidebarProps: SidebarProps }) {
    const {
        employeesList,
        isLoading,
        isError,
        refetch,
        deleteEmployee,
        snackbarMessage,
        setSnackbarMessage,
        isEmployeeDetails,
        setIsEmployeeDetails,
        selectedEmployee,
        setSelectedEmployee,
        updateEmployee,
    } = useEmployee();

    return (
        <Main>
            <Head>
                <title>Empleados - SisGest</title>
            </Head>
            <EmployeeHeader
                onMenuIconClick={() => sidebarProps.setOpen(true)}
                onReplayIconClick={refetch}
            />
            <Sidebar {...sidebarProps} />
            <Content>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Suspense fallback={<LoadingSpinner />}>
                        {isError && (
                            <ErrorMessage>
                                Ha ocurrido un error. Por favor, recargue la página (tecla
                                F5).
                            </ErrorMessage>
                        )}
                        {employeesList && (
                            <EmployeesTable
                                tags={EmployeeListTagsWithKeys}
                                employees={employeesList}
                                onDeleteEmployee={id => {
                                    deleteEmployee(id, {
                                        onSuccess: () => {
                                            refetch();
                                            setSnackbarMessage(
                                                'Empleado borrado correctamente.'
                                            );
                                            setTimeout(
                                                () => setSnackbarMessage(false),
                                                4000
                                            );
                                        },
                                    });
                                }}
                                onRowClick={employee => {
                                    setSelectedEmployee(employee);
                                    setIsEmployeeDetails(true);
                                }}
                            />
                        )}
                    </Suspense>
                )}
                {isEmployeeDetails && (
                    <Suspense>
                        <EmployeeDetailsDialog
                            isOpen={isEmployeeDetails}
                            tags={EmployeeListTagsWithKeys}
                            employee={selectedEmployee}
                            onEditButtonClick={() => console.log('editado')}
                            onDeleteButtonClick={id => {
                                deleteEmployee(id, {
                                    onSuccess: () => {
                                        refetch();
                                        setSnackbarMessage(
                                            'Empleado borrado correctamente.'
                                        );
                                        setIsEmployeeDetails(false);
                                        setTimeout(() => setSnackbarMessage(false), 4000);
                                    },
                                });
                            }}
                            onCloseButtonClick={() => setIsEmployeeDetails(false)}
                            onDialogClose={() => setIsEmployeeDetails(false)}
                            onFormSubmit={employee => {
                                updateEmployee(employee, {
                                    onSuccess: () => {
                                        refetch();
                                        setSelectedEmployee(employee);
                                        setSnackbarMessage(
                                            'Empleado actualizado correctamente'
                                        );
                                        setTimeout(() => setSnackbarMessage(false), 4000);
                                    },
                                });
                            }}
                        />
                    </Suspense>
                )}
            </Content>
            <Suspense>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={!(snackbarMessage === false)}
                    message={snackbarMessage || ''}
                    action={
                        <IconButton
                            size='small'
                            aria-label='close'
                            color='inherit'
                            onClick={() => setSnackbarMessage(false)}
                        >
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    }
                />
            </Suspense>
        </Main>
    );
}

export default EmployeesPage;
