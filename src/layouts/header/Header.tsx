import { AppBar, Toolbar, Typography, Stack, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderContainerStyles } from './Header.styles';

type HeaderProps = {
    title: string;
    children?: ReactNode;
    onMenuIconClick: () => void;
    sx?: SxProps<Theme> | undefined;
    hideMenuIcon?: boolean | undefined;
};

function Header(props: HeaderProps) {
    const { title, children, onMenuIconClick, sx = {}, hideMenuIcon = false } = props;

    return (
        <AppBar
            component='header'
            sx={{ ...HeaderContainerStyles, ...sx } as SxProps<Theme>}
            elevation={0}
            position='sticky'
            variant='outlined'
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h4' component='h1' sx={{ fontWeight: '500' }}>
                    {title}
                </Typography>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    {children}
                    {!hideMenuIcon && (
                        <MenuIcon
                            onClick={onMenuIconClick}
                            sx={{
                                display: {
                                    xs: 'inherit',
                                    md: 'none',
                                },
                                marginLeft: '1.5rem',
                            }}
                        />
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
