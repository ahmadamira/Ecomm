import React from 'react'
import { Box, Typography } from '@mui/material';
import style from "./indexxxx.module.css"


const Service = (props) => {
    const { img, title, subtitle } = props;

    return (
        <Box className={style.body3}>
            <img src={img}></img>
            <Typography className={style.title3}>
                {title}
            </Typography>
            <Typography className={style.subtitle3}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Service
