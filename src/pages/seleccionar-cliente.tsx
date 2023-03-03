import Head from 'next/head';
import { useRouter } from 'next/router';
import Content from '../layouts/content/Content';
import Header from '../layouts/header/Header';
import Main from '../layouts/main/Main';
import { SidebarProps } from '../layouts/sidebar/Sidebar';
import SelectClientTable from '../pages-content/seleccionar-cliente/layouts/SelectClientTable';

const ClientExamples = ['Intel', 'CRSSCH', 'Aieta Consulting'];

function SelectClient({ sidebarProps }: { sidebarProps: SidebarProps }) {
    const router = useRouter();

    return (
        <Main sx={{ gridTemplateAreas: "'header header' 'content content'" }}>
            <Head>
                <title>Seleccionar cliente - SisGest</title>
            </Head>
            <Header
                title='Seleccione un cliente - SisGest'
                onMenuIconClick={() => {
                    return;
                }}
                hideMenuIcon
            />
            <Content sx={{ maxWidth: '100vw' }}>
                <SelectClientTable
                    clients={ClientExamples}
                    onRowClick={client => {
                        sidebarProps.setClient(client);
                        router.push('/');
                    }}
                />
            </Content>
        </Main>
    );
}

export default SelectClient;
