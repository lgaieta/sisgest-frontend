import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const useClientSelector = () => {
    const [client, setClient] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        setClient(String(localStorage.getItem('client')));
    }, []);

    useEffect(() => {
        if (client !== '') localStorage.setItem('client', client);
        if (client === 'null') router.push('/seleccionar-cliente');
    }, [client]);

    return [client, setClient] as const;
};
