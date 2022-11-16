import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Tooltip, Button, Avatar, Container, Menu, Typography, Toolbar, Box, AppBar } from '@mui/material';


const button1 = {
  mr: 0,
  fontFamily: 'ubuntu',
  fontWeight: 500,
  letterSpacing: '0rem',
  color: 'inherit',
  textDecoration: 'none',
}
const button2 = {
  mr: 0,
  fontFamily: 'ubuntu',
  fontWeight: 500,
  letterSpacing: 'rem',
  color: '#001245',
  textDecoration: 'none',
} 

const titles=[
  {
    'name':'Nosotros',
    'href':'#us' 
  },
  {
    'name':'Oferta Educativa',
    'href':'#offer' 
  },
  {
    'name':'Edutainers',
    'href':'#edutainers' 
  },{
    'name':'Beneficios',
    'href':'#benefits' 
  }
]

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
    <AppBar color="secondary" position="sticky" sx={{ width: "99vw", maxHeight: 80 }}> 
      {
        //Menu (texto desplegable)
      }
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar" anchorEl={anchorElement} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElement)} onClose={handleCloseNavMenu}
            sx={{ transition: 'all 1s linear', display: { xs: 'block', md: 'none' }, }}
          >
            {titles.map((page) => (
              <MenuItem href={page.href} key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>

        </Box>

        {//Menú flex
        }
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {titles.map((page) => (

            <Button
              key={page}
              onClick={handleCloseNavMenu}
              href={page.href}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Typography  className='textGrad' sx={{
                mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'ubuntu', fontWeight: 600,
                letterSpacing: '0rem', color: 'inherit', textDecoration: 'none',
              }} textAlign="center">
                {page.name}
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
        <Box sx={{ position: 'relative', right: 40 }}>
          <Button style={{ color: 'white', border: "2px solid white", borderRadius: 15, marginRight: 20, paddingLeft: 20, paddingRight: 23 }}><Typography variant="h7" sx={button1} >Contactar</Typography></Button>
          <Button href='https://metalearning.technology' style={{ boxShadow: " 4px 4px 10px 5px #00B2FF40", backgroundColor: "white", borderRadius: 15, paddingLeft: 20, paddingRight: 23 }}><Typography variant="h7" sx={button2}>Aula Virtual</Typography></Button>
          
        </Box>
      </Toolbar> 
    </AppBar>
  );
}
export default Navbar;
