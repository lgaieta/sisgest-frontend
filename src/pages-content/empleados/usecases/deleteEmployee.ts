import Employee from '../../../entities/Employee.entity';
import deleteEmployeeFromRepository from '../services/deleteEmployeeFromRepository';

const deleteEmployee = async (id: Employee['id']) =>
    await deleteEmployeeFromRepository(id);

export default deleteEmployee;
