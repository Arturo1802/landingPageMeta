import { Suspense } from 'react'
import './App.css';
import { Canvas } from '@react-three/fiber'
import Model from './components/Meta.js'
import { Box, OrbitControls } from '@react-three/drei';
//import VrArea from './components/VrArea'; 
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#001245'
    }
  }
  
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Grid>
        
        <Grid item md={6}>
          <Container fixed>
            <Box>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '0rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Meta Learning 
            <br></br>University
          </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item md={6} >
          <Canvas className='canvas'>
            <OrbitControls autoRotate="true" autoRotateSpeed="0" />
            <spotLight intensity={5} angle={2} penumbra={1} position={[0.3, 0.5, 1.4]} castShadow />
            <spotLight intensity={0.8} angle={0} penumbra={1} position={[-5, -5, -5]} castShadow />
            <Suspense>
              <Model />
            </Suspense>
          </Canvas>
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
