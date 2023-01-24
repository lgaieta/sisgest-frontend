import Contract from '../../../entities/Contract.entity';
import saveContractInRepository from '../services/saveContractInRepository';

const createContract = async (contract: Omit<Contract, 'id'>) =>
    saveContractInRepository(contract);

export default createContract;
