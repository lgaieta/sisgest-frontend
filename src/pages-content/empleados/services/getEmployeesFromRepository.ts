export type FetchedEmployee = {
    id_empleado: number;
    nombres: string;
    apellidos: string;
    id_cliente: number;
};

const getEmployeesFromRepository = async (): Promise<FetchedEmployee[]> => {
    const query = await fetch('http://localhost:7000/empleado');
    return await query.json();
};

export default getEmployeesFromRepository;
