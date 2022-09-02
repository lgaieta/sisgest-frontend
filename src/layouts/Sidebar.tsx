import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import Icon from '@mui/material/Icon';

function Sidebar() {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: '13rem',
                '& .MuiDrawer-paper': {
                    paddingTop: '1.5rem',
                    width: '13rem',
                    gap: '1rem',
                },
            }}
        >
            <Typography
                component='p'
                variant='h5'
                sx={{ fontWeight: '600', width: '100%', textAlign: 'center' }}
            >
                SisGest
            </Typography>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/empleados'>
                            <ListItemIcon>
                                <Icon>people_filled</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Empleados' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Drawer>
    );
}

export default Sidebar;
