import Head from 'next/head';
import { Suspense } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Contract from '../../entities/Contract.entity';
import Content from '../../layouts/content/Content';
import EntityTable from '../../layouts/entity-table/EntityTable';
import Header from '../../layouts/header/Header';
import Main from '../../layouts/main/Main';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import useContract from '../../pages-content/contratos/hooks/useContract';
import ContractListTagsWithKeys from '../../pages-content/contratos/utils/ContractListTagsWithKeys';

function ContractsPage({ sidebarProps }: { sidebarProps: SidebarProps }) {
    const { contractsList, isLoading, isError } = useContract();

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
            <Content>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Suspense fallback={<LoadingSpinner />}>
                        {isError && (
                            <ErrorMessage>
                                Ha ocurrido un error. Por favor, recargue la página (tecla
                                F5).
                            </ErrorMessage>
                        )}
                        {contractsList && (
                            <EntityTable
                                idKey='id'
                                tags={ContractListTagsWithKeys}
                                entities={contractsList}
                                onDeleteEntity={contract => {
                                    console.log('Contrato borrado');
                                }}
                                onRowClick={contract => {
                                    console.log('Modal abierto');
                                }}
                            />
                        )}
                    </Suspense>
                )}
            </Content>
        </Main>
    );
}

export default ContractsPage;
