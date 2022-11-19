import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'

const BenefitCard = (props, { children }) => {
  const [hover, sethover] = useState(false)
  const handleHover = () => {
    sethover(true)
  }
  const handlenotHover = () => {
    sethover(false)
  }
  return (
    <Card onMouseEnter={handleHover} onMouseLeave={handlenotHover} sx={{ animation: !hover ? 'counterclock 1.5s cubic-bezier(.36,.07,.19,.97) both' : 'clockwise 1.5s cubic-bezier(.36,.07,.19,.97) both', width: { sm: '65vw', md: '20vw' }, margin: { sm: 'auto', md: '' }, height: { sm: '30vh', md: '45vh' }, borderRadius: 5, backgroundColor: '#346BAB', boxShadow: '4px 4px 4px 1px #AAAAAA95' }} >
      <CardContent sx={{ textAlign: 'center' }} >
        <div style={{ borderRadius: 60, padding: 15, paddingLeft: 25, paddingRight: 25, backgroundColor: '#001245', width: 'max-content', margin: 'auto' }} > <img src={props.icon} style={{ height: '8vh' }} alt="alt" /> </div>
        <Typography variant='h6' sx={{
          marginBottom: 2,
          fontFamily: 'ubuntu',
          fontWeight: 900,
          letterSpacing: 'rem',
          color: '#FFFFFF',
        }}>
          {props.title}
        </Typography>
        <Typography sx={{
          marginBottom: 3,
          fontFamily: 'ubuntu',
          fontWeight: 400,
          letterSpacing: 'rem',
          color: '#FFFFFF',
        }} >
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BenefitCard