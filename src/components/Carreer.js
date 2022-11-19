import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'

const Carreer = (props) => {
    const [inside, setInside] = useState(true);
    return (
        <Grid item sm={12} md={6}>
            <Card sx={{
                height: '85vh',
                width:{sm:'80vw', md:'25vw'}, 
                margin: 'auto',
                marginBottom:'2vh',
                backgroundImage: `url(${props.item.imagen})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "black",
                borderRadius: 15
            }}
                onMouseEnter={() => setInside(false)}
                onMouseLeave={() => setInside(true)}>
                <CardContent sx={{ transition: 'all .5s linear', backgroundColor: !inside ? 'rgb(44,58,107,0.7)' : 'rgb(10,10,10,0.0)', height: inside ? '0px' : '100%',textAlign:'center'}}>
                    <Typography variant='body1' sx={{
                        transition: 'all 1s linear',
                        display: inside? 'none':'',
                        fontFamily: 'ubuntu',
                        fontWeight: 600,
                        letterSpacing: '.05rem',
                        color: '#FFFFFF',
                        textAlign:'center',
                        bottom:10, 
                    }}>
                        <br />
                        {props.item.nombre}
                        <br />
                        <br />
                        <br /> 
                    </Typography> 
                    <Typography variant='body1' sx={{
                        transition: 'all 1s linear',
                        display: inside? 'none':'',
                        fontFamily: 'ubuntu',
                        fontWeight: 400,
                        letterSpacing: '.05rem',
                        color: '#FFFFFF',
                        textAlign:'justify',
                        bottom:10, 
                    }}>
                        <br />
                        {props.item.descripcion} 
                    </Typography>
                    <Button href='#contact' style={{display: inside? 'none':'',position:'relative',top:150, color: 'white', border: "2px solid white", borderRadius: 20, paddingLeft: 20, paddingRight: 23 }}>
                        Más Info.
                    </Button>
                    
                </CardContent>
                <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', textAlign: 'center', display: !inside ? 'none' : '', }}>
                    <Typography gutterBottom variant="h5" sx={{
                        fontFamily: 'ubuntu',
                        fontWeight: 900,
                        letterSpacing: '.05rem',
                        color: '#FFFFFF'
                    }}>
                        {props.item.nombre}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    )
}

export default Carreer