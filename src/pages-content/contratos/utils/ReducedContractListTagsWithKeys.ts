import Contract from '../../../entities/Contract.entity';

// Los datos deben ser actualizados cuando el servicio esté hecho.
const ReducedContractListTagsWithKeys: [string, keyof Contract][] = [
    ['Número de Contrato', 'id'],
    ['Estado del Contrato', 'fechaAsignada'],
    ['Fecha de Inicio', 'fechaAsignada'],
    ['Fecha Fin', 'fechaAsignada'],
    ['Renovación del Contrato', 'fechaAsignada'],
    ['Sueldo Mensual', 'fechaAsignada'],
];

export default ReducedContractListTagsWithKeys;
