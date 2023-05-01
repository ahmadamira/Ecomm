import React from 'react'
import { Box, Typography } from '@mui/material';
import style from "./Factt.module.css"


const Factcard = (props) => {
  const { img, title, subtitle, id } = props;
  return (
    <>
      <Box className={id === 1 ? style.body22 : style.body1}>

        <img className={style.cardimg1} src={img}></img>
        <Typography sx={{}} className={id === 1 ? style.cardhead22 : style.cardhead1} >
          {title}
        </Typography >
        <Typography className={id === 1 ? style.cardbody22 : style.cardbody1} >
          {subtitle}
        </Typography >

      </Box>
    </>
  )
}

export default Factcard