import Employee from "../../../entities/Employee.entity";
import updateEmployeeInRepository from "../services/updateEmployeeInRepository";

const updateEmployee = async (data: Omit<Employee, 'client_id'>) => updateEmployeeInRepository(data)

export default updateEmployee;