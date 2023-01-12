import { useMutation } from 'react-query';
import Contract from '../../../entities/Contract.entity';
import updateContract from '../usecases/updateContract';

const useUpdateContract = () =>
    useMutation(async (contract: Contract) => await updateContract(contract));

export default useUpdateContract;
