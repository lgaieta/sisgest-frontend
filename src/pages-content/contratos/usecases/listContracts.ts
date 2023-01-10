import adaptContracts from '../adapters/adaptContracts';
import getContractsFromRepository from '../services/getContractsFromRepository';

const listContracts = async () => adaptContracts(await getContractsFromRepository());

export default listContracts;
