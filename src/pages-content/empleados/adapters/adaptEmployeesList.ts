import adaptEmployee from './adaptEmployee';
import { FetchedEmployee } from '../services/getEmployeesFromRepository';

const adaptEmployeesList = (employees: FetchedEmployee[]) =>
    employees.map(employee => adaptEmployee(employee));

export default adaptEmployeesList;
