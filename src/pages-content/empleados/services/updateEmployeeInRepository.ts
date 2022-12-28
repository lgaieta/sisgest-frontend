import Employee from '../../../entities/Employee.entity';

const updateEmployeeInRepository = async (employee: Omit<Employee, 'client_id'>) => {
    const res = await fetch('http://localhost:7000/empleado', {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) throw new Error('Failed while updating employee.');
};

export default updateEmployeeInRepository;
