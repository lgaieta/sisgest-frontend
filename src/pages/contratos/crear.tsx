import Main from '../../layouts/main/Main';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import Content from '../../layouts/content/Content';
import { Typography } from '@mui/material';
import CreateContractForm from '../../pages-content/contratos-crear/layout/CreateContractForm';

function CreateContract({ sidebarProps }: { sidebarProps: SidebarProps }) {
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
                <title>Crear contrato - SisGest</title>
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
            <Content sx={{ maxHeight: '100vh' }}>
                <Typography
                    variant='h4'
                    component='h1'
                    sx={{ fontWeight: '700', pt: { xs: 4, md: 0 } }}
                >
                    Crear contrato
                </Typography>
                <CreateContractForm />
            </Content>
        </Main>
    );
}

export default CreateContract;
