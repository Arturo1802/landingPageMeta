import React, { useEffect, useState } from 'react'
import { Chip, Divider, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material'
import MetaLogo from './meta logo.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setReload(!reload) 
  },[])
  return (
    <Grid container sx={{ backgroundColor: 'white', }} >
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
          <Chip sx={{ height: 3, width: '70vw', background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #0081FE 100%);" }} label="&emsp;" />
        </Divider>
      </Grid>
      <Grid item sm={0} md={7} sx={{ height: (window.innerWidth < 885) ? 0 : 500, marginTop: (window.innerWidth < 885) ? 0 : 10, visibility: (window.innerWidth < 885) ? 'hidden' : 'visible', paddingLeft: 25 }}>
        <img style={{ padding: 4, height: 200, border: '1px dashed #000000' }} src={MetaLogo} />
      </Grid>
      <Grid item sm={12} md={5}>
        <Typography variant='body1' sx={{
          marginTop: 10,
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#000000', wordBreak: 'break-all'
        }}>
          <LocationOnIcon sx={{ color: '#097FFA', fontSize: 40 }} />Av. Francisco I. Madero 251, Zona Centro, Aguascalientes, Ags, C.P 20000 <br />
          <LocationOnIcon sx={{ color: '#097FFA', fontSize: 40 }} />Av. Presidente Mazaryk 29, Polanco, Ciudad de México <br />
          <LocalPhoneIcon sx={{ color: '#097FFA', fontSize: 40 }} /> --------- <br />
          <br />
          Social Media: <a href='https://www.facebook.com/metalearninguniversity'><FacebookIcon sx={{ color: '#097FFA', fontSize: 40 }} /></a>&emsp;
          <a href='https://instagram.com/metalearninguniversity?igshid=YmMyMTA2M2Y='><InstagramIcon  sx={{ color: '#097FFA', fontSize: 40 }} /></a>&emsp;
          <a  href='https://www.linkedin.com/company/meta-learning-university/'><LinkedInIcon sx={{ color: '#097FFA', fontSize: 40 }}  /></a> &emsp;
        </Typography> 
      </Grid>
      <Divider style={{ margin: 'auto', marginTop:(window.innerWidth < 885) ? "-20vh":'-10vh'}}>
        <Chip sx={{ height: 3, width: '90vw', background: "-webkit-linear-gradient(180deg,#2c2c2c  30.26%, #2c2c2c 100%);" }} label="&emsp;" />
      </Divider>
    </Grid>
  )
}

export default Footer