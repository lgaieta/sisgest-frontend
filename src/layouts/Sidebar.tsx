import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    Paper,
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
                    marginBottom: '1.5rem',
                }}
            >
                SisGest
            </Typography>
            <Divider />
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
            <Paper
                variant='outlined'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginInline: '1rem',
                    marginBlock: 'auto 1.5rem',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '500',
                        width: 'calc(100% - 2rem)',
                        marginInline: 'auto',
                        marginBlock: '.5rem',
                        textAlign: 'center',
                        color: 'text.secondary',
                    }}
                    component='p'
                    variant='subtitle1'
                >
                    {client}
                </Typography>
                <Button color='secondary'>Elegir otro cliente</Button>
            </Paper>
        </Drawer>
    );
}

export default Sidebar;
