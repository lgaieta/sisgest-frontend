import { TextField, Button, Typography } from '@mui/material';
import Head from 'next/head';
import ErrorMessage from '../../components/ErrorMessage';
import CreateEmployeeLayout from '../../layouts/employees/CreateEmployeeLayout';
import Main from '../../layouts/Main';
import { useCreateEmployeeForm } from '../../pages-content/empleados/crear/useCreateEmployeeForm';

const { Container, Form } = CreateEmployeeLayout;

function CreateEmployeePage() {
    const { formState, register, handleSubmit, createEmployee, isLoading, isError } =
        useCreateEmployeeForm();

    return (
        <Main title='Crear empleado' hideHeader>
            <Head>
                <title>Crear empleado - SisGest</title>
            </Head>
            <Container>
                <Form onSubmit={handleSubmit(data => createEmployee(data))}>
                    <Typography variant='h3' sx={{ fontWeight: '700' }}>
                        Crear empleado
                    </Typography>
                    <TextField {...register('names')} label='Nombres' />
                    <TextField {...register('surnames')} label='Apellidos' />
                    <Button
                        type='submit'
                        variant='contained'
                        size='large'
                        disableElevation
                        sx={{ padding: '0.75rem 1rem' }}
                    >
                        {isLoading ? 'Creando...' : ' Crear empleado'}
                    </Button>
                    {formState.errors ? (
                        <>
                            {Object.keys(formState.errors).map(errorName => (
                                <ErrorMessage key={errorName}>
                                    {formState.errors[errorName].message as string}
                                </ErrorMessage>
                            ))}
                        </>
                    ) : null}
                    {isError && (
                        <ErrorMessage>
                            Ha ocurrido un error al crear el cliente, por favor intente
                            nuevamente.
                        </ErrorMessage>
                    )}
                </Form>
            </Container>
        </Main>
    );
}

export default CreateEmployeePage;
