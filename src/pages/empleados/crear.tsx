import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Employee from '../../entities/Employee.entity';
import Main from '../../layouts/Main';

type EmployeeFormStructure = { names: Employee['names']; surnames: Employee['surnames'] };

function CrearEmpleadoPage() {
    const { register, handleSubmit } = useForm<EmployeeFormStructure>();

    return (
        <Main title='Crear empleado' hideHeader>
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '90%',
                    width: '80%',
                }}
            >
                <Box
                    component='form'
                    onSubmit={handleSubmit(data => console.log(data))}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '40%',
                    }}
                >
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
                </Box>
            </Box>
        </Main>
    );
}

export default CrearEmpleadoPage;
