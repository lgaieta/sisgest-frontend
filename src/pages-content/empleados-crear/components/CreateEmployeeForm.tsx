import { Typography, TextField, Button } from '@mui/material';
import ErrorMessage from '../../../components/ErrorMessage';
import useCreateEmployeeForm from '../hooks/useCreateEmployeeForm';
import CreateEmployeeLayout from '../layouts/CreateEmployeeLayout';

function CreateEmployeeForm() {
    const { formState, register, handleSubmit, createEmployee, isLoading, isError } =
        useCreateEmployeeForm();

    return (
        <CreateEmployeeLayout.Form onSubmit={handleSubmit(data => createEmployee(data))}>
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
        </CreateEmployeeLayout.Form>
    );
}

export default CreateEmployeeForm;
