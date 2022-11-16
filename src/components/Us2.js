import { Divider, Typography, Chip, Grid } from '@mui/material'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
 

const Us2 = () => {
     
    return (
         
            <Grid id="us" container sx={{ marginBottom: 10 }}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3" sx={{
                        fontFamily: 'ubuntu',
                        fontWeight: 600,
                        letterSpacing: 'rem',
                        color: '#FFFFFF', textAlign: "center"
                    }}>
                        Nosotros
                    </Typography>
                    <Divider style={{ marginBottom: "5vh" }}>
                        <Chip sx={{ height: 5, background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
                    </Divider>
                </Grid>
                <Grid sx={{ textAlign: 'center' }} item sm={12} md={7}>
                    <img style={{ transform: 'rotate(0deg)' }} src="usimg.png">
                    </img>
                </Grid>
                <Grid sx={{ marginTop: 10 }} item sm={12} md={4}  >
                    <Typography
                        variant="h4" sx={{
                            fontFamily: 'ubuntu',
                            fontWeight: 400,
                            letterSpacing: 'rem',
                            color: '#FFFFFF', textAlign: "justify"
                        }}
                    >Nuestro principal propósito es ofrecerte una educación profesional de calidad a un precio accesible.
                    </Typography><br />
                    <Typography
                        variant="h4" sx={{
                            fontFamily: 'ubuntu',
                            fontWeight: 600,
                            letterSpacing: 'rem',
                            color: '#00B2FF', textAlign: "justify"
                        }}
                    >¡Conócenos y enamórate de la nueva educación online!</Typography>
                </Grid>
            </Grid> 
    )
}

export default Us2