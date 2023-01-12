import { useState } from 'react';
import Contract from '../../../entities/Contract.entity';
import useDeleteContract from './useDeleteContract';
import useLoadContracts from './useLoadContracts';
import useUpdateContract from './useUpdateContract';

const useContract = () => {
    const { data: contractsList, isLoading, isError, refetch } = useLoadContracts();
    const { mutate: deleteContract } = useDeleteContract();
    const [snackbarMessage, setSnackbarMessage] = useState<string | false>(false);
    const [isContractDetails, setIsContractDetails] = useState<boolean>(false);
    const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
    const { mutate: updateContract } = useUpdateContract();

    return {
        contractsList,
        isLoading,
        isError,
        refetch,
        deleteContract,
        snackbarMessage,
        setSnackbarMessage,
        isContractDetails,
        setIsContractDetails,
        selectedContract,
        setSelectedContract,
        updateContract,
    };
};

export default useContract;
