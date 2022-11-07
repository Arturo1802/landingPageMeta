import React from 'react'
import { Suspense } from 'react'
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Model from './/Meta.js'
import { Button, Grid } from '@mui/material';
import { Typography } from '@mui/material';
const button2 = {
  mr: 0,
  display: { xs: 'flex', md: 'flex' },
  fontFamily: 'ubuntu',
  fontWeight: 500,
  letterSpacing: 'rem',
  color: '#001245',
  textDecoration: 'none',
}



const Main = () => {
  return (
    <Grid container>
      <Grid sx={{
        marginLeft: { xs: "5% ", md: 10 },
        marginTop: { xs: 10, md: 10 },
        marginBottom: 10
      }} item md={5}>
        <Box>
          <img src={require('./METALEARNING.png')} style={{ paddingLeft: { xs: -50, md: 20 }, marginBottom: -50, height: 90 }} />
          <h1 style={{ marginBottom: 10 }}>Aprendiendo <br />sin limites</h1>
          <span style={{  fontSize: 20, color: "#FFFFFF" }}>
            En Meta Learning University tendrás <br /> acceso a una <span style={{ color: "#00B2FF" }}>educación de calidad</span> en<br /> un <span style={{ color: "#00B2FF" }}>formato digital único</span> , <span style={{ fontStyle: "italic" }}>¿estás listo para<br /> vivir esta experiencia?</span>
          </span>
          <div style={{marginTop:15}}>
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <Button style={{
              boxShadow: " 4px 4px 10px 5px #00B2FF40",
              backgroundColor: "white", borderRadius: 15, paddingLeft: 20, paddingRight: 23
            }}>
              <Typography  variant="h7"  sx={button2}>
              Comienza ahora 
              </Typography>
            </Button>
          </div>

        </Box>
      </Grid>
      <Grid sx={{
        marginLeft: { xs: "10% ", md: 10 },
        marginTop: 5,
        marginBottom: 10, border: 5, borderColor: 'rgba(40,100,255,.0)', borderRadius: 4, height: { xs: 300, md: 500 }
      }} item sm={12} md={5} >
        <Canvas style={{ borderRadius: 12, }} className='canvas'>
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