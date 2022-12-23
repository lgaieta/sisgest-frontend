import Employee from '../../../entities/Employee.entity';

const deleteEmployeeFromRepository = async (id: Employee['id']) => {
    await fetch('http://localhost:7000/empleado/' + id, {
        method: 'DELETE',
    });
};

export default deleteEmployeeFromRepository;
