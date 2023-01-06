const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const postEmployee = async (employee: { names: string; surnames: string }) => {
    return fetch(`${baseUrl}/empleado`, {
        method: 'POST',
        body: JSON.stringify({ ...employee, client_id: 1 }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (!response.ok) throw new Error('Algo ha salido mal.');
    });
};

export default postEmployee;
