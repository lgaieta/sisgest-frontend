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

    return (
        <Drawer
            role='navigation'
            aria-label='Principal'
            variant='permanent'
            sx={SidebarContainerStyles(open)}
        >
            <Typography component={Link} href='/' variant='h5' sx={SidebarTitleStyles}>
                SisGest
            </Typography>
            <Box sx={{ width: '100%' }}>
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
                                <PeopleIcon sx={{ color: 'text.primaryAlwaysDark' }}>
                                    people_filled
                                </PeopleIcon>
                            </ListItemIcon>
                            <ListItemText
                                color='text.primaryAlwaysDark'
                                primary='Empleados'
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href='/contratos'
                            sx={SidebarNavigationItemButtonStyles}
                        >
                            <ListItemIcon>
                                <ArticleIcon sx={{ color: 'text.primaryAlwaysDark' }} />
                            </ListItemIcon>
                            <ListItemText
                                color='text.primaryAlwaysDark'
                                primary='Contratos'
                            />
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
                    maxWidth: 'fit-content',
                    marginBlock: 'auto 1.5rem',
                    borderRadius: '1rem',
                    padding: '0.5rem',
                    bgcolor: 'background.secondaryAlwaysDark',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '500',
                        width: 'calc(100% - 2rem)',
                        marginInline: 'auto',
                        marginBlock: '.5rem',
                        textAlign: 'center',
                        color: 'text.primaryAlwaysDark',
                    }}
                    component='p'
                    variant='subtitle1'
                >
                    {client}
                </Typography>
                <Button
                    variant='contained'
                    component={Link}
                    href='/seleccionar-cliente'
                    onClick={() => setClient('null')}
                    disableElevation
                    sx={{
                        bgcolor: 'background.primaryAlwaysDark',
                        color: 'text.primaryAlwaysDark',
                        textAlign: 'center',
                        '&:hover': {
                            bgcolor: '#212121',
                        },
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
                    color: 'text.primaryAlwaysDark',
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
