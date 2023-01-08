import Head from 'next/head';
import Content from '../../layouts/content/Content';
import Header from '../../layouts/header/Header';
import Main from '../../layouts/main/Main';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';

function ContractsPage({ sidebarProps }: { sidebarProps: SidebarProps }) {
    return (
        <Main>
            <Head>
                <title>Contratos - SisGest</title>
            </Head>
            <Header
                title='Contratos'
                onMenuIconClick={() => sidebarProps.setOpen(true)}
            />
            <Sidebar {...sidebarProps} />
            <Content>Contratos</Content>
        </Main>
    );
}

export default ContractsPage;
