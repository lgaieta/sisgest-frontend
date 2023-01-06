import Head from 'next/head';
import Content from '../layouts/content/Content';
import Header from '../layouts/header/Header';
import Main from '../layouts/main/Main';
import Sidebar, { SidebarProps } from '../layouts/sidebar/Sidebar';

function Home(props: { sidebarProps: SidebarProps }) {
    return (
        <>
            <Head>
                <title>Inicio - SisGest</title>
            </Head>
            <Main>
                <Header
                    title='Inicio'
                    onMenuIconClick={() => props.sidebarProps.setOpen(true)}
                />
                <Sidebar {...props.sidebarProps} />
                <Content>Inicio</Content>
            </Main>
        </>
    );
}

export default Home;
