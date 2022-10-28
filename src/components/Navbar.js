import * as React from 'react'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu';  
import {MenuItem, Tooltip , Button, Avatar,Container,Menu, Typography,Toolbar,Box, AppBar } from '@mui/material';


const pages = ['¿Por qué MLU?', 'Oferta Educativa', 'Edutainers','Beneficios']; 

function Navbar() {
  const [anchorElement, setanchorElement] = React.useState(null);
   
  const handleOpenNavMenu = (event) => {
    setanchorElement(event.currentTarget);
  }; 

  const handleCloseNavMenu = () => {
    setanchorElement(null);
  };
 

  return (
    <AppBar  color="secondary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElement}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElement)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
           
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Typography sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'ubuntu', fontWeight: 600,
              letterSpacing: '0rem', color: 'inherit', textDecoration: 'none', }} textAlign="center">
                {page}</Typography>
              </Button>
            ))}
          </Box> 
          <Box sx={{ flexGrow: 0 }}>
             <Button>Contactar</Button>
             <Button>Iniciar sesión</Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
