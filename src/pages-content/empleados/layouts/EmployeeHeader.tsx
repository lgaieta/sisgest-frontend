import { Box, Tooltip, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import ReplayIcon from '@mui/icons-material/Replay';
import Header from '../../../layouts/header/Header';

const EmployeeHeader = ({
    onReplayIconClick,
    onMenuIconClick,
}: {
    onReplayIconClick: () => void;
    onMenuIconClick: () => void;
}) => (
    <Header title='Empleados' onMenuIconClick={onMenuIconClick}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip title='Recargar empleados'>
                <IconButton onClick={() => onReplayIconClick()}>
                    <ReplayIcon sx={{ color: 'secondary.contrastText' }} />
                </IconButton>
            </Tooltip>
            <Button
                variant='contained'
                disableElevation
                component={Link}
                href='/empleados/crear'
            >
                Crear Empleado
            </Button>
        </Box>
    </Header>
);

export default EmployeeHeader;
