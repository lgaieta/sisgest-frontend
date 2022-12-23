export type FetchedEmployee = {
    id_empleado: number;
    nombres: string;
    apellidos: string;
    id_cliente: number;
};

type GetEmployees = () => Promise<FetchedEmployee[]>;

const getEmployees: GetEmployees = async () => {
    const query = await fetch('http://localhost:7000/empleado');
    return await query.json();
};

export default getEmployees;
