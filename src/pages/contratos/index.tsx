import { Snackbar, IconButton } from '@mui/material';
import Head from 'next/head';
import { Suspense } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import Contract from '../../entities/Contract.entity';
import Content from '../../layouts/content/Content';
import EntityTable from '../../layouts/entity-table/EntityTable';
import Main from '../../layouts/main/Main';
import Sidebar, { SidebarProps } from '../../layouts/sidebar/Sidebar';
import useContract from '../../pages-content/contratos/hooks/useContract';
import { ContractListTagsWithKeysAndTabs } from '../../pages-content/contratos/utils/ContractListTagsWithKeys';
import CloseIcon from '@mui/icons-material/Close';
import EntityDetailsDialogWithTabs from '../../layouts/entity-details-dialog/EntityDetailsDialogWithTabs';
import ContractHeader from '../../pages-content/contratos/layout/ContractHeader';
import ReducedContractListTagsWithKeys from '../../pages-content/contratos/utils/ReducedContractListTagsWithKeys';

function ContractsPage({ sidebarProps }: { sidebarProps: SidebarProps }) {
    const {
        contractsList,
        isLoading,
        isError,
        deleteContract,
        refetch,
        snackbarMessage,
        setSnackbarMessage,
        isContractDetails,
        setIsContractDetails,
        selectedContract,
        setSelectedContract,
        updateContract,
    } = useContract();

    const handleDeleteContract = (contract: Contract) =>
        deleteContract(contract, {
            onSuccess: () => {
                refetch();
                setSnackbarMessage('Contrato borrado correctamente');
                setTimeout(() => setSnackbarMessage(false), 4000);
            },
        });

    const handleUpdateContract = (contract: Contract) => {
        updateContract(contract, {
            onSuccess: () => {
                refetch();
                setSelectedContract(contract);
                setSnackbarMessage('Contrato actualizado correctamente');
                setTimeout(() => setSnackbarMessage(false), 4000);
            },
        });
    };

    return (
        <Main>
            <Head>
                <title>Contratos - SisGest</title>
            </Head>
            <ContractHeader
                onMenuIconClick={() => sidebarProps.setOpen(true)}
                onReplayIconClick={refetch}
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
                                tags={ReducedContractListTagsWithKeys}
                                entities={contractsList}
                                onDeleteEntity={handleDeleteContract}
                                onRowClick={contract => {
                                    setIsContractDetails(true);
                                    setSelectedContract(contract);
                                }}
                            />
                        )}
                    </Suspense>
                )}
            </Content>
            {isContractDetails && (
                <Suspense>
                    <EntityDetailsDialogWithTabs<Contract>
                        title={contract => contract.id}
                        isOpen={isContractDetails}
                        tags={ContractListTagsWithKeysAndTabs}
                        entity={selectedContract}
                        onEditButtonClick={() => null}
                        onDeleteButtonClick={handleDeleteContract}
                        onCloseButtonClick={() => setIsContractDetails(false)}
                        onDialogClose={() => setIsContractDetails(false)}
                        onFormSubmit={handleUpdateContract}
                    />
                </Suspense>
            )}
            <Suspense>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={!(snackbarMessage === false)}
                    message={snackbarMessage || ''}
                    action={
                        <IconButton
                            size='small'
                            aria-label='close'
                            color='inherit'
                            onClick={() => setSnackbarMessage(false)}
                        >
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    }
                />
            </Suspense>
        </Main>
    );
}

export default ContractsPage;
