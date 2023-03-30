import Head from 'next/head';
import LoginMain from '../pages-content/iniciar-sesion/layouts/main/LoginMain';
import LoginHero from '../pages-content/iniciar-sesion/layouts/hero/LoginHero';
import LoginForm from '../pages-content/iniciar-sesion/layouts/form/LoginForm';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SidebarProps } from '../layouts/sidebar/Sidebar';

type LoginPageProps = {
    setIsLogged: Dispatch<SetStateAction<string>>;
    isLogged: 'true' | 'false';
    sidebarProps: SidebarProps;
};

function LoginPage(props: LoginPageProps) {
    const { isLogged, setIsLogged, sidebarProps } = props;
    const router = useRouter();

    useEffect(() => {
        if (isLogged === 'true') {
            router.push(
                sidebarProps.client !== 'null' && localStorage.getItem('client')
                    ? '/'
                    : '/seleccionar-cliente'
            );
        }
    }, [isLogged, router, sidebarProps.client]);

    return (
        <LoginMain>
            <Head>
                <title>Iniciar sesión - SisGest</title>
            </Head>
            <LoginHero />
            <LoginForm setIsLogged={setIsLogged} />
        </LoginMain>
    );
}

export default LoginPage;
