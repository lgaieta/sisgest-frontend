import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import Employee from '../../entities/Employee.entity';
import CreateEmployeeLayout from '../../layouts/employees/CreateEmployeeLayout';
import Main from '../../layouts/Main';
import { CreateEmployeeResolver } from '../../pages-content/empleados/crear/CreateEmployeeResolver';

type EmployeeFormStructure = { names: Employee['names']; surnames: Employee['surnames'] };

const { Container, Form } = CreateEmployeeLayout;

function CreateEmployeePage() {
    const { formState, register, handleSubmit } = useForm<EmployeeFormStructure>({
        resolver: CreateEmployeeResolver,
    });

    return (
        <Main title='Crear empleado' hideHeader>
            <Container>
                <Form onSubmit={handleSubmit(data => console.log(data))}>
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
                        Crear
                    </Button>
                    {formState.errors ? (
                        <>
                            {Object.keys(formState.errors).map(errorName => (
                                <ErrorMessage>
                                    {formState.errors[errorName].message}
                                </ErrorMessage>
                            ))}
                        </>
                    ) : null}
                </Form>
            </Container>
        </Main>
    );
}

export default CreateEmployeePage;
