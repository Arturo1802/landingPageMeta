import { Button, Card, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'

const button1 = {
      color: 'white',
      border: "2px solid white", 
      borderRadius: 15, 
      margin:'auto' 
  }

const edutainer = [
    {
        'imagen': 'man.png',
        'nombre': 'Nombre 1',
        'materia': 'Materia 1'
    },
    {
        'imagen': 'man.png',
        'nombre': 'Nombre 2',
        'materia': 'Materia 2'
    },
    {
        'imagen': 'man.png',
        'nombre': 'Nombre 3',
        'materia': 'Materia 3'
    },
    {
        'imagen': 'man.png',
        'nombre': 'Nombre 3',
        'materia': 'Materia 3'
    },
    {
        'imagen': 'man.png',
        'nombre': 'Nombre 3',
        'materia': 'Materia 3'
    }
]


const Edutainers = () => {
    return (
        <Grid sx={{ marginTop: 10 }} container >
            <Grid item sm={12} md={12}>
                <Typography variant="h3" sx={{
                    fontFamily: 'ubuntu',
                    fontWeight: 600,
                    letterSpacing: 'rem',
                    color: '#FFFFFF', textAlign: "center"
                }}>
                    Edutainers
                </Typography>
                <Divider style={{ marginBottom: "5vh" }}>
                    <Chip sx={{ height: 5, background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
                </Divider>
            </Grid>
            <Grid sx={{ marginLeft: 'auto', }} item sm={12} md={11} >
                <Grid container sx={{ maxHeight: '60vh', overflow: 'hidden' }}>
                    {
                        edutainer.map((item) => (
                            <Grid item sm={6} md={4} sx={{ padding:'auto', margin: 'auto', backgroundColor: 'rgba(255, 0, 0, 0.0)', }}>
                                <Card sx={{ maxWidth: 300, backgroundColor: 'rgba(255, 0, 0, 0.0)', }}>
                                    <CardMedia
                                        component="img"
                                        image={item.imagen}
                                        alt={item.nombre}
                                    />
                                    <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                            {item.nombre}
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: 'white' }}>
                                            {item.materia}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid sx={{margin:'auto'}}  item sm={12} md={12}>
                <Button style={button1}>Ver Mas</Button>
            </Grid>
        </Grid>
    )
}

export default Edutainers