import Employee from '../../../entities/Employee.entity';

type CreateEmployeeFormStructure = {
    names: Employee['names'];
    surnames: Employee['surnames'];
};

export default CreateEmployeeFormStructure;
