import Sidebar from './layouts/Sidebar';
import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import SelectClient from './pages/select-client.page';
import Home from './pages/home.page';
import { useState } from 'react';
import EmpleadosPage from './pages/empleados.page';

function App() {
    const [client, setClient] = useState<string | null>('Visma');

    return (
        <Box>
            <Sidebar client={client} setClient={setClient} />
            <Routes>
                <Route
                    path='/seleccionar-cliente'
                    element={
                        client !== null ? (
                            <Navigate replace to='/' />
                        ) : (
                            <SelectClient setClient={setClient} />
                        )
                    }
                />
                <Route
                    path='/'
                    element={
                        client === null ? (
                            <Navigate replace to='/seleccionar-cliente' />
                        ) : (
                            <Home />
                        )
                    }
                />
                <Route
                    path='/empleados'
                    element={
                        client === null ? (
                            <Navigate replace to='/seleccionar-cliente' />
                        ) : (
                            <EmpleadosPage />
                        )
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;
