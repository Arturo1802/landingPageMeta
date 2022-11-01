import React from 'react'
import { Suspense } from 'react'
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Model from './/Meta.js'
import { Grid } from '@mui/material';
import {Typography} from '@mui/material';


const Main = () => { 
  return (
    <Grid container>
      <Grid sx={{
        marginLeft: { xs: "20% ", md: 10 },
        marginTop: 20,
        marginBottom:10
      }} item md={5}>
        <Box>
          <img src={require('./METALEARNING.png')} style={{ paddingLeft:{xs:-50,md:20 },marginBottom:-50, height:90}} />
          <h1>Aprendiendo <br/>sin limites</h1> 
           En Meta Learning University tendrás acceso a una educación de calidad en un formato digital único , ¿estás listo para vivir esta experiencia? 
          
        </Box> 
      </Grid>
      <Grid sx={{  marginLeft: { xs: "20% ", md: 10 },
        marginTop: 20,
        marginBottom:10,  border: 5, borderColor: 'rgba(40,100,255,.0)', borderRadius: 4, height: { xs: 300, md: 500 } }} item sm={12} md={5} >
        <Canvas   style={{ borderRadius: 12, }} className='canvas'>
          <OrbitControls autoRotate="true" autoRotateSpeed="8" />
          <spotLight intensity={200} angle={2} penumbra={0} position={[0.3, 0.5, 1.4]} castShadow />
          <spotLight intensity={200} angle={-1} penumbra={0} position={[-5, -5, -5]} castShadow />
          <Suspense>
            <Model />
          </Suspense>
        </Canvas>
        
      </Grid> 
    </Grid>
  )
}

export default Main