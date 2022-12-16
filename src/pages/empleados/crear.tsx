import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import ErrorMessage from '../../components/ErrorMessage';
import CreateEmployeeLayout from '../../layouts/employees/CreateEmployeeLayout';
import Main from '../../layouts/Main';
import { CreateEmployeeFormStructure } from '../../pages-content/empleados/crear/CreateEmployeeFormStructure.type';
import { CreateEmployeeResolver } from '../../pages-content/empleados/crear/CreateEmployeeResolver';
import { postEmployee } from '../../services/postEmployee';
import { useRouter } from 'next/router';
const { Container, Form } = CreateEmployeeLayout;
import ErrorBoundary from '../../utils/ErrorBoundary';

function CreateEmployeePage() {
    const { formState, register, handleSubmit } = useForm<CreateEmployeeFormStructure>({
        resolver: CreateEmployeeResolver,
    });
    const router = useRouter();
    const { mutate, isLoading, isError } = useMutation(
        async (data: CreateEmployeeFormStructure) => postEmployee(data),
        { onSuccess: () => router.push('/empleados') }
    );

    return (
        <Main title='Crear empleado' hideHeader>
            <ErrorBoundary
                fallbackComponent={
                    <ErrorMessage>
                        Ha ocurrido un error al cargar la vista, por favor recargue la
                        página.
                    </ErrorMessage>
                }
            >
                <Container>
                    <Form onSubmit={handleSubmit(data => mutate(data))}>
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
                                Ha ocurrido un error al crear el cliente, por favor
                                intente nuevamente.
                            </ErrorMessage>
                        )}
                    </Form>
                </Container>
            </ErrorBoundary>
        </Main>
    );
}

export default CreateEmployeePage;
