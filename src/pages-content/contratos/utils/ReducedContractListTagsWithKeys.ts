import Contract from '../../../entities/Contract.entity';

const ReducedContractListTagsWithKeys: [string, keyof Contract][] = [
    ['Número de Contrato', 'id'],
    ['Fecha de Inicio', 'fechaAsignada'],
];

export default ReducedContractListTagsWithKeys;
