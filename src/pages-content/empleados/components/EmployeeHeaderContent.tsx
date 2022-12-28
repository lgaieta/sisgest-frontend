import { Box, Tooltip, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import ReplayIcon from '@mui/icons-material/Replay';

const EmployeeHeaderContent = ({ refetch }: { refetch: () => void }) => (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title='Recargar empleados'>
            <IconButton onClick={() => refetch()}>
                <ReplayIcon />
            </IconButton>
        </Tooltip>
        <Button variant='outlined' component={Link} href='/empleados/crear'>
            Crear Empleado
        </Button>
    </Box>
);

export default EmployeeHeaderContent;
