import Head from 'next/head';
import CreateEmployeeLayout from '../../pages-content/empleados-crear/layouts/CreateEmployeeLayout';
import Main from '../../layouts/main/Main';
import CreateEmployeeForm from '../../pages-content/empleados-crear/components/CreateEmployeeForm';
import Content from '../../layouts/content/Content';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const { Container } = CreateEmployeeLayout;

function CreateEmployeePage({ sidebarProps }: { sidebarProps: SidebarProps }) {
    return (
        <Main
            sx={{
                gridTemplateAreas: {
                    xs: "'content content' 'content content'",
                    md: "'sidebar content' 'sidebar content'",
                },
            }}
        >
            <Head>
                <title>Crear empleado - SisGest</title>
            </Head>
            <Sidebar {...sidebarProps} />
            <MenuIcon
                onClick={() => sidebarProps.setOpen(true)}
                sx={{
                    display: { xs: 'inherit', md: 'none' },
                    position: 'fixed',
                    top: '1rem',
                    right: '1rem',
                }}
            />
            <Content>
                <Container>
                    <CreateEmployeeForm />
                </Container>
            </Content>
        </Main>
    );
}

export default CreateEmployeePage;
