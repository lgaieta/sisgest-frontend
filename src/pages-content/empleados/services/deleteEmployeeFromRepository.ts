import Employee from '../../../entities/Employee.entity';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const deleteEmployeeFromRepository = async (id: Employee['id']) => {
    await fetch(`${baseUrl}/empleado/${id}`, {
        method: 'DELETE',
    });
};

export default deleteEmployeeFromRepository;
