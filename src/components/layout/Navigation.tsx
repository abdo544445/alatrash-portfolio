import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Abdo Alatrash
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path}
            selected={isActivePath(item.path)}
            sx={{
              color: isActivePath(item.path) ? 'primary.main' : 'inherit',
              '&.Mui-selected': {
                backgroundColor: 'rgba(94, 53, 177, 0.1)',
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                flexGrow: { xs: 1, md: 0 },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ABDO ALATRASH
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    sx={{ 
                      mx: 1, 
                      color: isActivePath(item.path) ? 'primary.main' : 'inherit',
                      fontWeight: isActivePath(item.path) ? 700 : 400,
                      '&:hover': {
                        backgroundColor: 'rgba(94, 53, 177, 0.1)',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;