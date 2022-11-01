import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Tooltip, Button, Avatar, Container, Menu, Typography, Toolbar, Box, AppBar } from '@mui/material';


const titles = ['Nosotros', 'Oferta Educativa', 'Edutainers', 'Beneficios'];
const button1 = {
  mr: 0,
  display: { xs: 'flex', md: 'flex' },
  fontFamily: 'ubuntu',
  fontWeight: 500,
  letterSpacing: '0rem',
  color: 'inherit',
  textDecoration: 'none',
}
const button2 = {
  mr: 0,
  display: { xs: 'flex', md: 'flex' },
  fontFamily: 'ubuntu',
  fontWeight: 500,
  letterSpacing: 'rem',
  color: '#001245',
  textDecoration: 'none',
}
function Navbar() {
  const [anchorElement, setanchorElement] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  const loginM = () => {
    setLogin(true);
  }
  const handleOpenNavMenu = (event) => {
    setanchorElement(event.currentTarget); 

  };
  const handleCloseNavMenu = () => {
    setanchorElement(null);
  };


  return (
    <AppBar color="secondary" position="sticky" sx={{ width: "100%" , maxHeight:80 }}>
      <Container sx={{ width: "100%" }} >
        {
          //Menu (texto desplegable)
        }
        <Toolbar disableGutters>
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
              id="menu-appbar" anchorEl={anchorElement} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
              keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElement)} onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, }}
            >
              {titles.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {titles.map((page) => (

              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href="#"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography className='textGrad' sx={{
                  mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'ubuntu', fontWeight: 600,
                  letterSpacing: '0rem', color: 'inherit', textDecoration: 'none',
                }} textAlign="center">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          {
            //Navbar items
          }
          {
            //Button box
          }
          <Box sx={{ marginRight: { xs: 0, md: '15%' }, display:"flex" }}>
            <Button style={{ color: 'white', border: "2px solid white", borderRadius: 15, marginRight: 60, paddingLeft: 20, paddingRight:23}}><Typography variant="h7" sx={button1} >Contactar</Typography></Button>
            {login ? <>Sesion iniciada(?)</> : <Button style={{ backgroundColor: "white", borderRadius: 15, paddingLeft: 20, paddingRight:23 }}><Typography variant="h7" sx={button2}>Aula Virtual</Typography></Button>}

          </Box>
        </Toolbar>

      </Container>

    </AppBar>
  );
}
export default Navbar;
