import Head from 'next/head';
import Main from '../layouts/Main';

function Home() {
    return (
        <>
            <Head>
                <title>Inicio - SisGest</title>
            </Head>
            <Main title='Inicio'>Home page</Main>
        </>
    );
}

export default Home;
