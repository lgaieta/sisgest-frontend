import Sidebar from './layouts/Sidebar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectClient from './pages/SelectClient';
import Main from './layouts/Main';

function App() {
    return (
        <Router>
            <Box>
                <Sidebar />
                <Routes>
                    <Route path='/seleccionar-cliente' element={<SelectClient />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
