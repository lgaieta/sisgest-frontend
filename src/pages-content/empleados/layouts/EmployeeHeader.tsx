import { Box, Tooltip, IconButton, Button, AppBar, Toolbar } from '@mui/material';
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
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1rem' }}>
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
        <AppBar
            component='div'
            sx={{
                display: { xs: 'inherit', sm: 'none' },
                bottom: '0',
                top: 'auto',
                backgroundColor: 'background.default',
                color: 'black',
            }}
        >
            <Toolbar>
                <Box sx={{ display: 'flex', gap: '1rem', width: '100%' }}>
                    <Button
                        variant='contained'
                        disableElevation
                        component={Link}
                        href='/empleados/crear'
                        sx={{ width: '100%' }}
                    >
                        Crear Empleado
                    </Button>
                    <Tooltip title='Recargar empleados'>
                        <IconButton onClick={() => onReplayIconClick()}>
                            <ReplayIcon sx={{ color: 'text.primary' }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    </Header>
);

export default EmployeeHeader;
