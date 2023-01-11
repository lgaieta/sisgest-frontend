import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const deleteContractFromRepository = async (contract: Contract) => {
    await timeout(3000);
    console.log(contract);
    return;
};

export default deleteContractFromRepository;
