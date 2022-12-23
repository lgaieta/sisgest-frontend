import Employee from '../../../entities/Employee.entity';
import getEmployees from '../services/getEmployees';
import adaptEmployeesList from '../adapters/adaptEmployeesList';

const listEmployees = async (): Promise<Employee[]> => {
    return adaptEmployeesList(await getEmployees());
};

export default listEmployees;
