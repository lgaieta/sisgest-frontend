import { useQuery } from 'react-query';
import adaptEmployee from '../adapters/adaptEmployee';
import { getEmployees } from '../services/getEmployees';

const useLoadEmployees = () => {
    return useQuery(['employees'], async () =>
        (await getEmployees()).map(employee => adaptEmployee(employee))
    );
};

export default useLoadEmployees;
