import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const updateContractFromRepository = async (contract: Contract) => {
    await timeout(2000);
    console.log('Contract updated!', contract);
};

export default updateContractFromRepository;
