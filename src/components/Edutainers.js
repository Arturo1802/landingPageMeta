import { Button, Card, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Grid } from '@mui/material' 
 
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
    const [open, setOpen] = useState(false) 
    return ( 
            <Grid id="edutainers" sx={{ transition: 'all .5s linear', marginTop: 10, marginBottom: open ? 10 : 15, maxHeight: open ? 'max-content' : '95vh' }} container >
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
                <Grid sx={{ textAlign: 'center', wordWrap: 'break-word' }} item sm={12} md={12}>
                    <Typography variant='h5' sx={{
                        fontFamily: 'ubuntu',
                        fontWeight: 600,
                        letterSpacing: 'rem',
                        color: '#FFFFFF', textAlign: "center"
                    }} >
                        Es el docente que te llevará de la mano durante tu trayecto. El apoyo que requieras te lo brindará de la mejor manera posible
                    </Typography>
                </Grid>
                <Grid sx={{ marginLeft: 'auto', }} item sm={12} md={11} >
                    <Grid container sx={{ transition: 'all .5s linear', maxHeight: open ? '180vh' : '75vh', overflow: open? 'auto':'hidden' }}>
                        {
                            edutainer.map((item,key) => (
                                <Grid item sm={6} md={4} sx={{ padding: 'auto', margin: 'auto', backgroundColor: 'rgba(255, 0, 0, 0.0)', }}>
                                    <Card key={key} sx={{ maxWidth: 300, marginTop: 10, backgroundColor: 'rgba(255, 0, 0, 0.0)', }}>
                                        <CardMedia
                                            component="img"
                                            image={item.imagen}En breve nos comunicaremos contigo

                                            alt={item.nombre}
                                        />
                                        <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', textAlign: 'center' }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                                                {item.nombre}
                                            </Typography>
                                            <Typography variant="h4" sx={{ color: 'white' }}>
                                                {
                                                    item.materia
                                                }
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 0 }} item sm={12} md={12}>
                    <Button style={{
                        color: 'white',
                        border: "2px solid white",
                        borderRadius: 15,
                        margin: 'auto',
                    }} onClick={() => {
                        setOpen(!open)
                        console.log(open)
                    }}>
                        {
                            open ? <Typography variant="h6" sx={{ color: 'white' }}>Ver menos</Typography> : <Typography variant="h6" sx={{ color: 'white' }}>Ver mas</Typography>
                        }</Button>
                </Grid>
            </Grid> 
    )
}

export default Edutainers