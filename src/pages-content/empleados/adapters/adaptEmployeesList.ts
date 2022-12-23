import adaptEmployee from './adaptEmployee';
import { FetchedEmployee } from '../services/getEmployees';

const adaptEmployeesList = (employees: FetchedEmployee[]) =>
    employees.map(employee => adaptEmployee(employee));

export default adaptEmployeesList;
