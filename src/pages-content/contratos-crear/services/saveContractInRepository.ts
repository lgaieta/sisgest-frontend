import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const saveContractInRepository = async (contract: Omit<Contract, 'id'>) => {
    await timeout(3000);
    console.log('Saved', contract);
};

export default saveContractInRepository;
