export const postEmployee = async (employee: { names: string; surnames: string }) => {
    fetch('http://localhost:7000/empleado', {
        method: 'POST',
        body: JSON.stringify({ ...employee, client_id: 1 }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (!response.ok) throw new Error('Algo ha salido mal.');
    });
};
