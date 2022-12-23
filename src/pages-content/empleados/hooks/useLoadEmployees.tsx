import { useQuery } from 'react-query';
import listEmployees from '../usecases/ListEmployees';

const useLoadEmployees = () => {
    return useQuery(['employees'], async () => listEmployees());
};

export default useLoadEmployees;
