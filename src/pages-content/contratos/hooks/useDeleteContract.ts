import { useMutation } from 'react-query';
import Contract from '../../../entities/Contract.entity';
import deleteContract from '../usecases/deleteContract';

const useDeleteContract = () =>
    useMutation(async (contract: Contract) => await deleteContract(contract));

export default useDeleteContract;
