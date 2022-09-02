import Sidebar from './layouts/Sidebar';
import { Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Box>
            <Sidebar />
            <Routes>
                <Route path='/' element={<div />} />
            </Routes>
        </Box>
    );
}

export default App;
