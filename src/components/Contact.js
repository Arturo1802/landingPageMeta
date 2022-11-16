import { Grid, Typography, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContactImg from './contact meta.png' 

import { send } from 'emailjs-com';

const Contact = () => {
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setReload(!reload) 
  })
  const [toSend, setToSend] = useState({
    from_name: '',
    from_mail: '',
    message: '', 
  });
  //process.env.REACT_APP_MAIL_SERVICE
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6lqbnpn',
      'template_qymhqnm',
      toSend,
      'xLT_eDmgCFxg59Avs'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const inputstyle = { border: '2px solid #346BAB', borderRadius: 10, marginTop: 30, padding: 10, backgroundColor: '#346BAB', width: '80%', fontSize: 25, color: 'white' }
  return (
    <Grid container sx={{ marginBottom: 0, }}>
      <Grid item sm={0} md={7} sx={{ height:(window.innerWidth<885)?0:'', marginTop:(window.innerWidth<885)?0: 30, visibility:(window.innerWidth<885)?'hidden':'visible' }}>
        <img src={ContactImg} />
      </Grid>
      <Grid item sm={12} md={5}>
        <Typography variant='h2' sx={{
          marginTop: 10,
          fontFamily: 'ubuntu',
          fontWeight: 600,
          letterSpacing: 'rem',
          color: '#FFFFFF',
        }}>
          Contacto
        </Typography>
        <br />
        <span style={{ fontSize: 20, fontStyle: 'italic', color: 'white' }}>En breve nos comunicaremos contigo</span> <br />
        <form style={{marginBottom:(window.innerWidth<885)?55:0}}>
          <input name='from_name' value={toSend.from_name} onChange={handleChange} type="text" placeholder='Nombre' required style={inputstyle} /> <br />
          <input name='from_mail' value={toSend.from_mail} onChange={handleChange} type="email" placeholder='Correo Electrónico' required style={inputstyle} /> <br />
          <textarea 
            name='message'
            value={toSend.message} 
            onChange={handleChange}
            placeholder='Mensaje'
            required 
            cols="30" rows="10"
            style={{ border: '2px solid #346BAB', borderRadius: 10, marginTop: 30, padding: 10, backgroundColor: '#346BAB', width: '80%', fontSize: 25, maxHeight: '35vh', color: 'white' }}>

          </textarea><br />
          <Button onClick={onSubmit} sx={{position: 'absolute', right: '6vw', border: '2px solid #346BAB', borderRadius: 10, marginTop: 1,letterSpacing:'.1rem', fontWeight:900 ,  backgroundColor: '#346BAB', fontSize: 15, color: 'white' }} >
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Contact