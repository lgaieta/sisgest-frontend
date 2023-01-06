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
    Box,
    useTheme,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import {
    SidebarContainerStyles,
    SidebarNavigationItemButtonStyles,
    SidebarTitleStyles,
} from './Sidebar.styles';

export type SidebarProps = {
    client: string | null;
    setClient: Dispatch<SetStateAction<string | null>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

function Sidebar(props: SidebarProps) {
    const { client, setClient, open, setOpen } = props;
    const theme = useTheme();

    return (
        <Drawer variant='permanent' sx={SidebarContainerStyles(theme, open)}>
            <Typography component={Link} href='/' variant='h5' sx={SidebarTitleStyles}>
                SisGest
            </Typography>
            <Box component='nav' sx={{ width: '100%' }}>
                <List sx={{ width: '100%' }}>
                    <ListItem disablePadding sx={{ width: '100%' }}>
                        <ListItemButton
                            component={Link}
                            href='/empleados'
                            sx={{
                                borderRadius: '.5rem',
                                '& .MuiButtonBase-root': { width: '100%' },
                            }}
                        >
                            <ListItemIcon>
                                <PeopleIcon
                                    sx={{ color: theme.palette.primary.contrastText }}
                                >
                                    people_filled
                                </PeopleIcon>
                            </ListItemIcon>
                            <ListItemText primary='Empleados' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href='/contratos'
                            sx={SidebarNavigationItemButtonStyles}
                        >
                            <ListItemIcon>
                                <ArticleIcon sx={{ color: 'primary.contrastText' }} />
                            </ListItemIcon>
                            <ListItemText primary='Contratos' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Paper
                variant='outlined'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
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
            <Button
                variant='text'
                onClick={() => setOpen(false)}
                sx={{
                    display: { xs: 'inherit', md: 'none' },
                    width: '100%',
                    color: theme.palette.primary.contrastText,
                    padding: '1rem',
                    marginBottom: '1.5rem',
                }}
            >
                Cerrar menú
            </Button>
        </Drawer>
    );
}

export default Sidebar;
