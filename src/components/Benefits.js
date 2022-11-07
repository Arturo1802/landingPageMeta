import { Card, CardContent, CardMedia, Chip, Divider, Typography, Collapse } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
const Benefits = () => {
  return (
    <Grid sx={{marginTop:10}} container>
      <Grid item md={12}>
        <Typography variant="h3" sx={{
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF', textAlign: "center"
        }}>
          Beneficios
        </Typography>
        <Divider style={{ marginBottom: "5vh" }}>
          <Chip sx={{ height: 5, background: "-webkit-linear-gradient(180deg,#0587FF  30.26%, #2056A6 100%);" }} label="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
        </Divider>
      </Grid>

    </Grid>
  )
}

export default Benefits