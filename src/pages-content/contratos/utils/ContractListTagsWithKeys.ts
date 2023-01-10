import Contract from '../../../entities/Contract.entity';

const ContractListTagsWithKeys: [string, keyof Contract][] = [
    ['N° Empleado', 'employee_id'],
    ['Fecha de inicio', 'start_date'],
    ['Fecha de finalización', 'finishing_date'],
    ['Estado', 'status'],
];

export default ContractListTagsWithKeys;
