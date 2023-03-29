import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const useClientSelector = () => {
    const [client, setClient] = useLocalStorageState<string>({
        key: 'client',
        fallbackValue: '',
        getItemCallback: String,
        setItemCallback: x => x,
    });
    const router = useRouter();

    useEffect(() => {
        if (
            (!localStorage.getItem('client') ||
                localStorage.getItem('client') === 'null') &&
            router.pathname !== '/seleccionar-cliente' &&
            router.pathname !== '/iniciar-sesion'
        )
            router.push('/seleccionar-cliente');
    });

    return [client, setClient] as const;
};

export default useClientSelector;
