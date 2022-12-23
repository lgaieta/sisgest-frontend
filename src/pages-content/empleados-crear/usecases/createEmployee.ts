import CreateEmployeeFormStructure from '../types/CreateEmployeeFormStructure.type';
import postEmployee from '../services/postEmployee';

const createEmployee = async (data: CreateEmployeeFormStructure) =>
    await postEmployee(data);

export default createEmployee;
