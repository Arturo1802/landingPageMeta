import { Divider, Typography, Chip, Grid } from '@mui/material'
import React from 'react'

const Us2 = () => {
    return (
        <Grid container sx={{marginBottom:30}}>
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
            <Grid item sm={0} md={8}>

            </Grid>
            <Grid sx={{marginTop:10}} item sm={12} md={3}>
                <Typography
                    variant="h5" sx={{
                        fontFamily: 'ubuntu',
                        fontWeight: 600,
                        letterSpacing: 'rem',
                        color: '#FFFFFF', textAlign: "center"
                    }}
                >Nuestro principal propósito es ofrecerte una educación profesional de calidad a un precio accesible.</Typography>

                <Typography
                    variant="h4" sx={{
                        fontFamily: 'ubuntu',
                        fontWeight: 600,
                        letterSpacing: 'rem',
                        color: '#00B2FF', textAlign: "center"
                    }}
                >¡Conócenos y enamórate de la nueva educación online!</Typography>
            </Grid>
        </Grid>
    )
}

export default Us2