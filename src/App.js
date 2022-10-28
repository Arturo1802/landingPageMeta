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
const theme  = createTheme({
  palette: {
    secondary: {
      main: '#001255'
    },
    primary: {
      main: '#000000'
    }
  }

}); 
function App() {

  return (
    <ThemeProvider theme={theme} >
      <Navbar></Navbar>
      <Grid    container>
        <Grid sx={{
          marginTop:20,
          fontFamily:'ubuntu',
        }} item md={5}>
          <Container fixed>
            <Box>
              <Typography variant="h6" noWrap component="a" href="/"
                sx={{ mr: 0, display: { xs: 'none', md: 'flex' }, fontFamily: 'ubuntu',
                  fontWeight: 1000, letterSpacing: '.1rem',
                  color: 'white', textDecoration: 'none', }} >
                <img src={require('./components/METALEARNING.png')} />
              </Typography>
            </Box>
          </Container>

          
        </Grid>
        <Grid sx={{ marginTop:9,  border:1 , borderColor:'#FFFFFFF', borderRadius:4,  }} item sm={12} md={5} >
          <Canvas style={{border:1, borderRadius:12, borderColor:'#FFFFFF'}} className='canvas'>
            <OrbitControls autoRotate="true" autoRotateSpeed="8" />
            <spotLight intensity={200} angle={2} penumbra={1} position={[0.3, 0.5, 1.4]} castShadow />
            <spotLight intensity={200} angle={-1} penumbra={1} position={[-5, -5, -5]} castShadow />
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
