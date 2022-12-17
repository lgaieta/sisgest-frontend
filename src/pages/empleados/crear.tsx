import { TextField, Button, Typography } from '@mui/material';
import Head from 'next/head';
import ErrorMessage from '../../components/ErrorMessage';
import CreateEmployeeLayout from '../../pages-content/empleados/crear/CreateEmployeeLayout';
import Main from '../../layouts/Main';
import CreateEmployeeForm from '../../pages-content/empleados/crear/CreateEmployeeForm';
import { useCreateEmployeeForm } from '../../pages-content/empleados/crear/useCreateEmployeeForm';

const { Container } = CreateEmployeeLayout;

function CreateEmployeePage() {
    return (
        <Main title='Crear empleado' hideHeader>
            <Head>
                <title>Crear empleado - SisGest</title>
            </Head>
            <Container>
                <CreateEmployeeForm />
            </Container>
        </Main>
    );
}

export default CreateEmployeePage;
