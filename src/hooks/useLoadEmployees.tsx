import { useEffect, useState } from 'react';
import adaptEmployee from '../adapters/adaptEmployee';
import Employee from '../entities/Employee.entity';
import { getEmployees } from '../services/getEmployees';

type UseLoadEmployeesReturn = {
    error: boolean;
    isLoading: boolean;
    employeesList: Employee[] | null;
};

const useLoadEmployees = (): UseLoadEmployeesReturn => {
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [employeesList, setEmployeesList] = useState<Employee[] | null>(null);

    const fetchLogic = async () => {
        try {
            setError(false);
            setIsLoading(true);
            const fetchedEmployees = await getEmployees();
            const adaptedEmployees = fetchedEmployees.map(employee =>
                adaptEmployee(employee)
            );
            setEmployeesList(adaptedEmployees);
            setIsLoading(false);
        } catch (e) {
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLogic();
    }, []);

    return {
        error,
        isLoading,
        employeesList,
    };
};

export default useLoadEmployees;
