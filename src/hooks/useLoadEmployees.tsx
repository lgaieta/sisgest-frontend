import { useEffect, useState } from 'react';
import adaptEmployee from '../adapters/adaptEmployee';
import Employee from '../entities/Employee.entity';
import { getEmployees } from '../services/getEmployees';

export type UseLoadEmployeesReturn = {
    error: boolean;
    isLoading: boolean;
    employeesList: Employee[] | null;
    executeLogic: (options: { showLoad?: boolean }) => Promise<void>;
};

const useLoadEmployees = (): UseLoadEmployeesReturn => {
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [employeesList, setEmployeesList] = useState<Employee[] | null>(null);

    const fetchLogic = async (options: { showLoad?: boolean }) => {
        const { showLoad = true } = options;

        try {
            if (showLoad) setIsLoading(true);
            setError(false);
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
        fetchLogic({});
    }, []);

    return {
        error,
        isLoading,
        employeesList,
        executeLogic: fetchLogic,
    };
};

export default useLoadEmployees;
