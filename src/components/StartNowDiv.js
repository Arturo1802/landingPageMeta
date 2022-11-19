import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const StartNowDiv = () => {
    return ( 
        <Grid item sm={12} md={11} sx={{ marginBottom: 5, paddingTop: 7, paddingBottom: 5, marginTop: 10, background: 'linear-gradient(90.98deg, #077BE8 28.24%, #01ABFC 53.17%, #00B2FF 56.77%, #2056A6 94.12%)', margin: 'auto', boxShadow: " 4px 4px 10px 5px #00B2FF40", textAlign: 'center', borderRadius: 5 }}>
            <Typography variant="h4" sx={{
                marginBottom: 5,
                fontFamily: 'ubuntu',
                fontWeight: 500,
                letterSpacing: 'rem',
                color: '#FFFFFF',
                textAlign: "center"
            }}>
                MLU te ofrece educación de calidad en un formato único
            </Typography>
            <Button href='https://metalearning.technology' style={{ boxShadow: " 4px 4px 10px 5px #00B2FF40", marginBottom: 20, backgroundColor: "#011447", borderRadius: 25, paddingLeft: 20, paddingRight: 23 }}>
                <Typography variant="h6" sx={{
                    fontFamily: 'ubuntu',
                    fontWeight: 600,
                    letterSpacing: '.1rem',
                    color: '#FFFFFF',
                    textAlign: "center"
                }}>
                    Comenzar ahora
                </Typography>
            </Button>
        </Grid>
    )
}

export default StartNowDiv