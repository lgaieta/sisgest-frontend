export type FetchedEmployee = {
    id_empleado: number;
    nombres: string;
    apellidos: string;
    id_cliente: number;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const getEmployeesFromRepository = async (): Promise<FetchedEmployee[]> => {
    const query = await fetch(`${baseUrl}/empleado`);
    return await query.json();
};

export default getEmployeesFromRepository;
