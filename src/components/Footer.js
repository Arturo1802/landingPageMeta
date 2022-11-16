import React from 'react'
import { Chip, Divider, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'
const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: 'white' }} >
      <Grid item sm={0} md={2}></Grid>
      <Grid item sm={12} md={10}>
        <Typography variant="h3" sx={{
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF',
          textAlign: "center"
        }}>
          &nbsp;
        </Typography>
        <Divider style={{ marginBottom: "5vh" }}>
          <Chip sx={{ height: 3, width:'70vw', background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #0081FE 100%);" }} label="&emsp;" />
        </Divider>
      </Grid>
      <Grid item sm={5} md={5}> 
        LOGO
      </Grid>
      <Grid item sm={0} md={1}>

      </Grid>
      <Grid item sm={6} md={6}>
        COntenido
      </Grid>
    </Grid>
  )
}

export default Footer