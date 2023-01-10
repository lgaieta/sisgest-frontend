import useLoadContracts from './useLoadContracts';

const useContract = () => {
    const { data: contractsList, isLoading, isError, refetch } = useLoadContracts();

    return {
        contractsList,
        isLoading,
        isError,
        refetch,
    };
};

export default useContract;
