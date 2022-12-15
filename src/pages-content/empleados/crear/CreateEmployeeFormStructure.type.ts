import Employee from '../../../entities/Employee.entity';

export type CreateEmployeeFormStructure = {
    names: Employee['names'];
    surnames: Employee['surnames'];
};
