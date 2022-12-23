import Employee from '../../../entities/Employee.entity';

const EmployeeListTagsWithKeys: [string, keyof Employee][] = [
    ['Nombres', 'names'],
    ['Apellidos', 'surnames'],
];

export default EmployeeListTagsWithKeys;
