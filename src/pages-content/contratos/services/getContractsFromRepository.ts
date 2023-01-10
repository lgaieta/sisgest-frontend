import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getContractsFromRepository = async (): Promise<Contract[]> => {
    await timeout(3000);
    return [
        {
            id: 1,
            employee_id: 30,
            start_date: 'Start Date',
            finishing_date: 'Finishing Date',
            status: 'ACTIVO',
        },
        {
            id: 2,
            employee_id: 33,
            start_date: 'Start Date',
            finishing_date: 'Finishing Date',
            status: 'ACTIVO',
        },
        {
            id: 3,
            employee_id: 4,
            start_date: 'Start Date',
            finishing_date: 'Finishing Date',
            status: 'ACTIVO',
        },
    ];
};

export default getContractsFromRepository;
