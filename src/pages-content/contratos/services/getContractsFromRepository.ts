import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getContractsFromRepository = async (): Promise<Contract[]> => {
    await timeout(3000);
    return [];
};

export default getContractsFromRepository;
