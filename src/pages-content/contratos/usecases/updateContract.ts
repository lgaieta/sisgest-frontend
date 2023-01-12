import Contract from '../../../entities/Contract.entity';
import updateContractFromRepository from '../services/updateContractFromRepository';

const updateContract = async (contract: Contract) =>
    await updateContractFromRepository(contract);

export default updateContract;
