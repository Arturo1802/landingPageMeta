import { Chip, Divider, Typography, Button, Card, CardContent, CardMedia , Grid} from '@mui/material'
import React, { useEffect, useState } from 'react' 
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import BenefitCard from './BenefitCard';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; 


const Benefits = () => {  
const [reload, setReload] = useState(false)

  useEffect(() => {
    setReload(!reload) 
  })
  return (
    <Grid sx={{ transition: 'all .5s linear',marginTop:(window.innerWidth<885)?15:0, background:'url(/bftbg.png) center no-repeat' }} id="benefits" container>
      <Grid item sm={12} md={12}>
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
      <Grid container sx={{ marginBottom: 5 }} >
        <Grid item sm={12} md={12} sx={{marginBottom:10}}>
          <BenefitCard
            icon={<MoreTimeIcon sx={{ fontSize: 50, color: 'white' }} />}
            title='Estudia a tu ritmo '
            text='Sin presiones, invierte el tiempo del día que prefieras y arma tu horario' />
        </Grid>
        <Grid item sm={12} md={4} sx={{marginBottom:(window.innerWidth<885)?-25:0}} >
          <BenefitCard
            icon={<PaidIcon sx={{ fontSize: 50, color: 'white' }} />}
            title='Paga lo justo'
            text='  ¡No te preocupes por el costo! Contamos con precios accesibles' />
        </Grid>
        <Grid sx={{visibility:(window.innerWidth<885)?'hidden':'visible'}} item sm={0} md={4}  >
          <img style={{ visibility:(window.innerWidth<885)?'hidden':'visible'}}   src="benefits.png" alt="AR lens" />
        </Grid>
        <Grid item sm={12} md={4}>
          <BenefitCard
            icon={<GroupIcon sx={{ fontSize: 50, color: 'white' }} />}
            title='Los mejores Edutainers'
            text='Contamos con la mejor calidad de docentes, ¿no nos crees? ¡Conocelos tú mismo! ' />
        </Grid>
        <Grid item sm={12} md={12} sx={{marginTop:15}} >
          <BenefitCard
            icon={<EventAvailableIcon sx={{ fontSize: 50, color: 'white' }} />}
            title='Termina tu licenciatura en un año '
            text='¡Así como lo lees! En Meta Learning University podrás concluir tu licenciatura en un año.' />
        </Grid>
      </Grid>
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
        <Button href='https://metalearning.technology' style={{  boxShadow: " 4px 4px 10px 5px #00B2FF40", marginBottom: 20, backgroundColor: "#011447", borderRadius: 25, paddingLeft: 20, paddingRight: 23 }}>
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
    </Grid>
  )
}

export default Benefits