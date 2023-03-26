import Head from 'next/head';
import LoginMain from '../pages-content/iniciar-sesion/layouts/main/LoginMain';
import LoginHero from '../pages-content/iniciar-sesion/layouts/hero/LoginHero';
import LoginForm from '../pages-content/iniciar-sesion/layouts/form/LoginForm';

function LoginPage() {
    return (
        <LoginMain>
            <Head>
                <title>Iniciar sesión - SisGest</title>
            </Head>
            <LoginHero />
            <LoginForm />
        </LoginMain>
    );
}

export default LoginPage;
