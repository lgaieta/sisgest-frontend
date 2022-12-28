import { useState } from 'react';
import Employee from '../../../entities/Employee.entity';
import useDeleteEmployee from './useDeleteEmployee';
import useLoadEmployees from './useLoadEmployees';
import useUpdateEmployee from './useUpdateEmployee';

const useEmployee = () => {
    const { data: employeesList, isLoading, isError, refetch } = useLoadEmployees();
    const { mutate: deleteEmployee } = useDeleteEmployee();
    const [hasEmployeeBeenDeleted, setHasEmployeeBeenDeleted] = useState<boolean>(false);
    const [isEmployeeDetails, setIsEmployeeDetails] = useState<boolean>(false);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const { mutate: updateEmployee } = useUpdateEmployee();

    return {
        employeesList,
        isLoading,
        isError,
        refetch,
        deleteEmployee,
        hasEmployeeBeenDeleted,
        setHasEmployeeBeenDeleted,
        isEmployeeDetails,
        setIsEmployeeDetails,
        selectedEmployee,
        setSelectedEmployee,
        updateEmployee,
    };
};

export default useEmployee;
