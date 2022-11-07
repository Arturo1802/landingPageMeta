import { Divider, Typography,Chip } from '@mui/material'
import React from 'react'

const Us2 = () => {
    return (
        <>
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
        </>
    )
}

export default Us2