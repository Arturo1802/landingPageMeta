import { Typography, Grid, Divider, Chip } from '@mui/material'
import React  from 'react'
import sistemas from './sistemas.png';
import admon from './admon.png';
import Carreer from './Carreer'; 
 

const carreras = [
  {
    "nombre": "Ing. en Sistemas Computacionales",
    "url": "",
    "imagen": 'https://i.pinimg.com/236x/3a/fd/65/3afd658ff9862ead1d2c3d8a2bae2a73.jpg'
  },
  {
    "nombre": "Licenciatura en Administracion de Empresas",
    "url": "",
    "imagen": "https://i.pinimg.com/550x/6f/64/bd/6f64bd8b62a495004ae3d3be0c686732.jpg"
  },
  {
    "nombre": "Licenciatura en Memes",
    "url": "",
    "imagen": "https://pbs.twimg.com/profile_images/1488682390977400833/7lb1xaM2_400x400.jpg"
  }
]
const carreras2 = [
  {
    "nombre": "Licenciatura en Administracion de Empresas",
    "descripcion": "Dentro de la Licenciatura en Administración de Empresas, serás capaz de adquirir conocimientos, tales como analizar, organizar, clarificar y dirigir los recursos con los que cuenta una empresa para alcanzar los objetivos propuestos.",
    "imagen": admon
  },
  {
    "nombre": "Ingenieria en Sistemas",
    "descripcion": "Dentro de la Ingeniería en sistemas computacionales adquirirás habilidades de direccion y coordinación de proyectos computacionales dentro de cualquier organización, controlando los recursos funcionales y procesos de las aplicaciones.",
    "imagen": sistemas
  },

]
 
const Offer = () => {
    
  return (
     
      <Grid sx={{}} container id="offer">
        <Grid sx={{
          marginLeft: { xs: "20% ", md: 10 },
          marginTop: { xs: 10, md: 25 },
          marginBottom: 10
        }} item sm={12} md={2}>
          <Typography variant="h3" sx={{
            fontFamily: 'ubuntu',
            fontWeight: 600,
            letterSpacing: 'rem',
            color: '#FFFFFF', textAlign: "left"
          }}>
            Oferta Educativa
          </Typography>
          <Divider style={{ marginLeft: { sm: '-10vw', md: '-20vw' }, marginBottom: "5vh" }}>
            <Chip sx={{ height: 5, width: "250px", background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
          </Divider>

        </Grid>
        <Grid item sm={0} md={1}>

        </Grid>
        <Grid item sm={12} md={7} sx={{ marginTop: { xs: 10, md: 10 }, }}>
          <Grid container>
            {
              carreras2.map((item) => (
                <Carreer item={item} />
              ))
            }
          </Grid>
        </Grid>
      </Grid> 
  )
}

export default Offer
