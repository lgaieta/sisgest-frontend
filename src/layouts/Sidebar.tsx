import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
    Paper,
    useTheme,
} from '@mui/material';
import Icon from '@mui/material/Icon';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

type SidebarProps = {
    client: string | null;
    setClient: Dispatch<SetStateAction<string | null>>;
};

function Sidebar(props: SidebarProps) {
    const { client, setClient } = props;
    const theme = useTheme();

    return (
        <Drawer
            variant='permanent'
            sx={{
                width: '13rem',
                '& .MuiDrawer-paper': {
                    paddingTop: '1.5rem',
                    paddingInline: '1rem',
                    width: '13rem',
                    color: theme.palette.primary.contrastText,
                    bgcolor: theme.palette.primary.main,
                },
            }}
        >
            <Typography
                component={Link}
                href='/'
                variant='h5'
                sx={{
                    fontWeight: '500',
                    width: '100%',
                    textAlign: 'center',
                    color: 'inherit',
                    textDecoration: 'none',
                    marginBottom: '1.5rem',
                }}
            >
                SisGest
            </Typography>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href='/empleados'
                            sx={{ borderRadius: '.5rem' }}
                        >
                            <ListItemIcon>
                                <Icon sx={{ color: theme.palette.primary.contrastText }}>
                                    people_filled
                                </Icon>
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
                    marginBlock: 'auto 1.5rem',
                    bgcolor: theme.palette.primary.light,
                    borderColor: theme.palette.primary.light,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '500',
                        width: 'calc(100% - 2rem)',
                        marginInline: 'auto',
                        marginBlock: '.5rem',
                        textAlign: 'center',
                        color: theme.palette.primary.contrastText,
                    }}
                    component='p'
                    variant='subtitle1'
                >
                    {client}
                </Typography>
                <Button
                    color='secondary'
                    component={Link}
                    href='/seleccionar-cliente'
                    onClick={() => setClient('null')}
                    sx={{
                        color: theme.palette.primary.contrastText,
                    }}
                >
                    Elegir otro cliente
                </Button>
            </Paper>
        </Drawer>
    );
}

export default Sidebar;
