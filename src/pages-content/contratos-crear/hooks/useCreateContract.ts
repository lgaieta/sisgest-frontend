import { useMutation, UseMutationOptions } from 'react-query';
import Contract from '../../../entities/Contract.entity';
import createContract from '../usecases/createContract';

const useCreateContract = (
    options: UseMutationOptions<void, unknown, Omit<Contract, 'id'>, unknown> = {}
) =>
    useMutation(
        async (contract: Omit<Contract, 'id'>) => await createContract(contract),
        options
    );

export default useCreateContract;
