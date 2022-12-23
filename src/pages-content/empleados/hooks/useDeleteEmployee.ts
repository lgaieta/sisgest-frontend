import { useMutation } from 'react-query';
import Employee from '../../../entities/Employee.entity';

const useDeleteEmployee = () => {
    return useMutation(async (id: Employee['id']) => {
        await fetch('http://localhost:7000/empleado/' + id, {
            method: 'DELETE',
        });
    });
};

export default useDeleteEmployee;
