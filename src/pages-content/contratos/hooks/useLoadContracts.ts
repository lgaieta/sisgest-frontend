import { useQuery } from 'react-query';
import listContracts from '../usecases/listContracts';

const useLoadContracts = () => useQuery(['contracts'], async () => await listContracts());

export default useLoadContracts;
