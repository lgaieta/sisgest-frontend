import Employee from '../../../entities/Employee.entity';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const updateEmployeeInRepository = async (employee: Omit<Employee, 'client_id'>) => {
    const res = await fetch(`${baseUrl}/empleado`, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) throw new Error('Failed while updating employee.');
};

export default updateEmployeeInRepository;
