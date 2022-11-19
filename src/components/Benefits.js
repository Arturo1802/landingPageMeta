import { Chip, Divider, Typography, Button, Card, CardContent, CardMedia , Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'  
import BenefitCard from './BenefitCard';
import Dolla from './Dolla.svg'
import Persona from './Persona.svg'
import Reloj from './Reloj.svg'
import Calendar from './Calendar.svg'


const Benefits = () => {  
const [reload, setReload] = useState(false)

  useEffect(() => { 
    window.addEventListener("resize", setReload )
  })
  return (
    <Grid sx={{ transition: 'all .5s linear',marginTop:(window.innerWidth<885)?15:0, background:'url(/bftbg.png) center no-repeat' }} id="benefits" container>
      <Grid item sm={12} md={12} >
        <Typography variant="h3" sx={{ 
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF',
          textAlign: "center"
        }}>
          Beneficios
        </Typography>
        <Divider style={{ marginBottom: "5vh" }}>
          <Chip sx={{ height: 5, background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
        </Divider>
      </Grid>
      <Grid container sx={{ marginBottom: 5, }} >
        <Grid item sm={12} md={12} sx={{marginBottom:15,}}>
          <BenefitCard
            icon={Reloj}
            title='Estudia a tu ritmo '
            text='Sin presiones, invierte el tiempo del día que prefieras y arma tu horario' />
        </Grid>
        <Grid item sm={12} md={4} sx={{marginBottom:(window.innerWidth<885)?-25:0}} >
          <BenefitCard
            icon={Dolla}
            title='Paga lo justo'
            text='  ¡No te preocupes por el costo! Contamos con precios accesibles' />
        </Grid>
        <Grid sx={{visibility:(window.innerWidth<885)?'hidden':'visible', margin:'auto'}} item sm={0} md={4}  >
          <img style={{ visibility:(window.innerWidth<885)?'hidden':'visible'}}   src="benefits.png" alt="AR lens" />
        </Grid>
        <Grid item sm={12} md={4}>
          <BenefitCard
            icon={Persona}
            title='Los mejores Edutainers'
            text='Contamos con la mejor calidad de docentes, ¿no nos crees? ¡Conocelos tú mismo! ' />
        </Grid>
        <Grid item sm={12} md={12} sx={{marginTop:15}} >
          <BenefitCard
            icon={Calendar}
            title='Termina tu licenciatura en un año '
            text='¡Así como lo lees! En Meta Learning University podrás concluir tu licenciatura en un año.' />
        </Grid>
      </Grid>
     
    </Grid>
  )
}

export default Benefits