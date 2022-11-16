import { Chip, Divider, Grid, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from '@mui/system'; 


const slides = ["Misión", "Vision", "Valores"]
const slides2 = [""]

const dots = {
  backgroundColor: "#02ABF7",
  display: "inline-block",
  height: 15,
  borderColor: "#02ABF7",
  borderRadius: 20
}
 
const Us = () => {
  return (
    <Grid container id="us">
      <Grid item sm={12} md={12}>
        <Typography variant="h3" sx={{
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF', textAlign: "center"
        }}>
          Nosotros
        </Typography>
        <Divider style={{ marginBottom: "5vh" }}>
          <Chip sx={{ height: 5, background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
        </Divider>
 
          <CarouselProvider style={{ margin:"auto", width: "90%" }}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            isPlaying={true}
            interval={4000}
            infinite={true}

        visibleSlides={1}
        currentSlide={0}
            
          >
            <Slider style={{ flexWrap:"wrap", width:"55%", maxHeight: "35vh",margin:"auto", paddingLeft:"auto", paddingRight:"auto"  }}>
              {
                slides.map((item) => (
                  <Slide style={{width:"40vw", marginLeft:"auto", marginRight:"auto" }}>
                    <Card sx={{ overflowWrap: "break-word", maxWidth: 350, backgroundColor: "#0D85FA", borderRadius: 4 }}>
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant='h4' sx={{
                          fontFamily: 'ubuntu',
                          fontWeight: 500,
                          letterSpacing: 'rem',
                          color: '#FFFFFF', textAlign: "center"
                        }} gutterBottom>
                          {item}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {
                            slides2.map((itemText) => (
                              <>{itemText}</>
                            ))
                          }
                        </Typography>
                        <Typography sx={{ textAlign: "justify", color:"white" }} variant="body1">
                          Este es un texto de prueba 
                        </Typography>
                      </CardContent>
                    </Card>
                  </Slide>
                ))
              }
            </Slider>
            <Container style={{ width: 100, margin: "0 auto" }}>
              <Dot slide={0} style={dots} />
              <Dot slide={1} style={dots} />
              <Dot slide={2} style={dots} />
            </Container>
          </CarouselProvider> 
      </Grid>
    </Grid>
  )
}

export default Us