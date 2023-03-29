import Head from 'next/head';
import LoginMain from '../pages-content/iniciar-sesion/layouts/main/LoginMain';
import LoginHero from '../pages-content/iniciar-sesion/layouts/hero/LoginHero';
import LoginForm from '../pages-content/iniciar-sesion/layouts/form/LoginForm';
import { Dispatch, SetStateAction } from 'react';

function LoginPage(props: { setIsLogged: Dispatch<SetStateAction<string>> }) {
    return (
        <LoginMain>
            <Head>
                <title>Iniciar sesión - SisGest</title>
            </Head>
            <LoginHero />
            <LoginForm setIsLogged={props.setIsLogged} />
        </LoginMain>
    );
}

export default LoginPage;
