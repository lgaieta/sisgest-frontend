import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const useLoginRedirect = () => {
    const [isLogged, setIsLogged] = useLocalStorageState({
        getItemCallback: value => value,
        setItemCallback: value => value,
        fallbackValue: 'false',
        key: 'is-logged',
    });

    const router = useRouter();

    useEffect(() => {
        if (
            !localStorage.getItem('is-logged') &&
            isLogged === 'false' &&
            router.pathname !== '/iniciar-sesion'
        ) {
            router.push('/iniciar-sesion');
        }
    }, [isLogged, router]);

    return [isLogged, setIsLogged];
};

export default useLoginRedirect;
