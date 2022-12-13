import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

export const useClientSelector = () => {
    const [client, setClient] = useLocalStorageState<string>({
        key: 'client',
        fallbackValue: '',
        getItemCallback: String,
        setItemCallback: x => x,
    });
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('client') && router.pathname !== '/seleccionar-cliente')
            router.push('/seleccionar-cliente');
    }, [client]);

    return [client, setClient] as const;
};
