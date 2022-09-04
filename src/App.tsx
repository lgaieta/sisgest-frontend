import Sidebar from './layouts/Sidebar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectClient from './pages/SelectClient';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Box>
                <Sidebar />
                <Routes>
                    <Route path='/seleccionar-cliente' element={<SelectClient />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
