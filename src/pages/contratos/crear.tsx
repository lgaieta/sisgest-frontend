import Main from '../../layouts/main/Main';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import Content from '../../layouts/content/Content';

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
            <Content>Crear contrato</Content>
        </Main>
    );
}

export default CreateContract;
