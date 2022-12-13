import {
    TableRow,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import Main from '../layouts/Main';

const ClientExamples = ['Intel', 'CRSSCH', 'Aieta Consulting'];

type SelectClientProps = {
    setClient: Dispatch<SetStateAction<string | null>>;
};

function SelectClient(props: SelectClientProps) {
    const { setClient } = props;
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Seleccionar cliente - SisGest</title>
            </Head>
            <Main title='Seleccione un cliente - SisGest' fullWidth>
                <TableContainer component={Paper} variant='outlined'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Empresa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ClientExamples.map(client => (
                                <TableRow
                                    sx={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        '&:hover': { bgcolor: '#F3F3F3' },
                                    }}
                                    onClick={() => {
                                        setClient(client);
                                        router.push('/');
                                    }}
                                    key={client}
                                >
                                    <TableCell>{client}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Main>
        </>
    );
}

export default SelectClient;
