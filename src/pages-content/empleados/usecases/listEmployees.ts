import Employee from '../../../entities/Employee.entity';
import getEmployeesFromRepository from '../services/getEmployeesFromRepository';
import adaptEmployeesList from '../adapters/adaptEmployeesList';

const listEmployees = async (): Promise<Employee[]> => {
    return adaptEmployeesList(await getEmployeesFromRepository());
};

export default listEmployees;
