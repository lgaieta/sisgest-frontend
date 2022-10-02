import { useState } from 'react';
import Employee from '../entities/Employee.entity';
import { UseLoadEmployeesReturn } from './useLoadEmployees';

type UseDeleteEmployeeOptions = {
    loadEmployees: UseLoadEmployeesReturn['executeLogic'];
};

type UseDeleteEmployeeReturn = {
    deleteEmployee: (id: Employee['id']) => void;
    /** Tells if an employee has been deleted recently */
    isEmployeeDeleted: boolean;
    setIsEmployeeDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseDeleteEmployee = (
    options: UseDeleteEmployeeOptions
) => UseDeleteEmployeeReturn;

const useDeleteEmployee: UseDeleteEmployee = options => {
    const { loadEmployees } = options;
    const [isEmployeeDeleted, setIsEmployeeDeleted] = useState<boolean>(false);

    const deleteEmployee = async (id: Employee['id']) => {
        await fetch('http://localhost:7000/empleado/' + id, {
            method: 'DELETE',
        });
        loadEmployees({ showLoad: false });
        setIsEmployeeDeleted(true);
        setTimeout(() => setIsEmployeeDeleted(false), 5000);
    };

    return {
        deleteEmployee,
        isEmployeeDeleted,
        setIsEmployeeDeleted,
    };
};

export default useDeleteEmployee;
