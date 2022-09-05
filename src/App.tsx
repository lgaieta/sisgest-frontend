import Sidebar from './layouts/Sidebar';
import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import SelectClient from './pages/SelectClient';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
    const [client, setClient] = useState<string | null>(null);

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
            </Routes>
        </Box>
    );
}

export default App;
