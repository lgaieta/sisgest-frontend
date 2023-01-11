import Contract from '../../../entities/Contract.entity';
import deleteContractFromRepository from '../services/deleteContractFromRepository';

const deleteContract = async (contract: Contract) =>
    await deleteContractFromRepository(contract);

export default deleteContract;
