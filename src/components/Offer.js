import { Diversity1 } from '@mui/icons-material'
import { Typography, Grid, Divider, Chip, Card, CardContent, CardActionArea, CardMedia } from '@mui/material'
import React from 'react'
import ReactSwipe from 'react-swipe';

const carreras = [
  {
    "nombre": "Ing. en Sistemas Computacionales",
    "url": "",
    "imagen": "https://i.kym-cdn.com/photos/images/newsfeed/002/074/984/dec.png"
  },
  {
    "nombre": "Lic. en Administracion de Empresas",
    "url": "",
    "imagen": "https://i.pinimg.com/550x/6f/64/bd/6f64bd8b62a495004ae3d3be0c686732.jpg"
  },
  {
    "nombre": "?",
    "url": "",
    "imagen": "https://pbs.twimg.com/profile_images/1488682390977400833/7lb1xaM2_400x400.jpg"
  }
]


const Offer = () => {
  let reactSwipeEl;
  return (
    <Grid container>
      <Grid sx={{
        marginLeft: { xs: "20% ", md: 10 },
        marginTop: { xs: 10, md: 35 },
        marginBottom: 10
      }} item sm={12} md={3}>
        <Typography variant="h3" sx={{
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF', textAlign: "left"
        }}>
          Oferta Educativa
        </Typography>
        <Divider style={{ marginLeft: { sm: "0px", md: "-30%" }, marginBottom: "5vh" }}>
          <Chip sx={{ height: 5, width: "250px", background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
        </Divider>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      </Grid>
      <Grid item sm={0} md={2}>

      </Grid>
      <Grid item sm={12} md={6} sx={{ marginTop: { xs: 10, md: 10 }, }}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true,widthOfSiblingSlidePreview: 50,}} 
          
          ref={el => (reactSwipeEl = el)} >
          {
            carreras.map((item) => (
              <Card sx={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', color: "black",borderRadius:15, width:'30vw' }}>
                <CardMedia
                  component="img"   
                  image={item.imagen}
                  alt={item.nombre}
                />
                <CardContent style={{ position: "absolute", color: "white", bottom: 0, left: "50%", transform: "translateX(-50%)", }} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    fontFamily: 'ubuntu',
                    fontWeight: 600,
                    letterSpacing: 'rem',
                    color: '#FFFFFF' 
                  }}>
                    {item.nombre}
                  </Typography>
                </CardContent>
              </Card>
            ))
          }

        </ReactSwipe>
      </Grid>
    </Grid>
  )
}

export default Offer
