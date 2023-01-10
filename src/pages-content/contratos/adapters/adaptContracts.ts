import { Adapter } from '../../../adapters/Adapter';
import Contract from '../../../entities/Contract.entity';

const adaptContracts: Adapter<Contract[], Contract[]> = contracts => contracts;

export default adaptContracts;
