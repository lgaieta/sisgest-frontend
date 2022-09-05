import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

type SidebarProps = {
    client: string | null;
};

function Sidebar(props: SidebarProps) {
    const { client } = props;

    if (client === null) return null;

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
                component={Link}
                to='/'
                variant='h5'
                sx={{
                    fontWeight: '500',
                    width: '100%',
                    textAlign: 'center',
                    color: 'text.primary',
                    textDecoration: 'none',
                }}
            >
                SisGest
            </Typography>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/empleados'>
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
