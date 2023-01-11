import { IconButton } from '@mui/material';
import Main from '../../layouts/main/Main';
import { lazy, Suspense } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EmployeeListTagsWithKeys from '../../pages-content/empleados/utils/EmployeeListTagsWithKeys';
import Head from 'next/head';
import LoadingSpinner from '../../components/LoadingSpinner';
import useEmployee from '../../pages-content/empleados/hooks/useEmployee';
import EmployeeHeader from '../../pages-content/empleados/layouts/EmployeeHeader';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import Content from '../../layouts/content/Content';
import { EntityTableType } from '../../layouts/entity-table/EntityTable';
import Employee from '../../entities/Employee.entity';
import type { EntityDetailsDialogType } from '../../layouts/entity-details-dialog/EntityDetailsDialog';

const EntityTable = lazy<EntityTableType<Employee, 'id'>>(
    () => import('../../layouts/entity-table/EntityTable')
);
const ErrorMessage = lazy(() => import('../../components/ErrorMessage'));
const Snackbar = lazy(() => import('@mui/material/Snackbar'));
const EntityDetailsDialog = lazy<EntityDetailsDialogType<Employee>>(
    () => import('../../layouts/entity-details-dialog/EntityDetailsDialog')
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

    const handleUpdateEmployee = (employee: Employee) => {
        updateEmployee(employee, {
            onSuccess: () => {
                refetch();
                setSelectedEmployee(employee);
                setSnackbarMessage('Empleado actualizado correctamente');
                setTimeout(() => setSnackbarMessage(false), 4000);
            },
        });
    };

    const handleDeleteEmployee = (employee: Employee) =>
        deleteEmployee(employee.id, {
            onSuccess: () => {
                refetch();
                setSnackbarMessage('Empleado borrado correctamente.');
                setIsEmployeeDetails(false);
                setTimeout(() => setSnackbarMessage(false), 4000);
            },
        });

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
                            <EntityTable
                                idKey='id'
                                tags={EmployeeListTagsWithKeys}
                                entities={employeesList}
                                onDeleteEntity={handleDeleteEmployee}
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
                        <EntityDetailsDialog
                            title={employee => employee.names}
                            isOpen={isEmployeeDetails}
                            tags={EmployeeListTagsWithKeys}
                            entity={selectedEmployee}
                            onEditButtonClick={() => null}
                            onDeleteButtonClick={handleDeleteEmployee}
                            onCloseButtonClick={() => setIsEmployeeDetails(false)}
                            onDialogClose={() => setIsEmployeeDetails(false)}
                            onFormSubmit={handleUpdateEmployee}
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
