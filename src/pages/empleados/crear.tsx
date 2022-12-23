import Head from 'next/head';
import CreateEmployeeLayout from '../../pages-content/empleados-crear/layouts/CreateEmployeeLayout';
import Main from '../../layouts/Main';
import CreateEmployeeForm from '../../pages-content/empleados-crear/components/CreateEmployeeForm';

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
