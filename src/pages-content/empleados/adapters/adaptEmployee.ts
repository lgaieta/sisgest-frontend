import Employee from '../../../entities/Employee.entity';
import { FetchedEmployee } from '../services/getEmployees';
import { Adapter } from '../../../adapters/Adapter';

const adaptEmployee: Adapter<FetchedEmployee, Employee> = entry => {
    return {
        id: entry.id_empleado,
        names: entry.nombres,
        surnames: entry.apellidos,
        client_id: entry.id_cliente,
    };
};

export default adaptEmployee;
