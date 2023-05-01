import React from 'react'

import { Container, Grid, Typography, Box } from "@mui/material";
import style from "./indexgridd.module.css"
import Factcard from '../Fact';
import Service from '../Service';
const serdata = [
    { img: './imgs/serimg.png', title: 'FREE AND FAST DELIVERY', subtitle: 'Free delivery for all orders over $140' },
    { img: './imgs/ser2.png', title: '24/7 CUSTOMER SERVICE', subtitle: 'Friendly 24/7 customer support' },
    { img: './imgs/ser3.png', title: 'MONEY BACK GUARANTEE', subtitle: 'We reurn money within 30 days' },

];
const Servicegrid = () => {
    return (

        <Grid className={style.body5} container spacing={5}>
            {serdata.map((obj) => (
                <Service img={obj.img} title={obj.title} subtitle={obj.subtitle} />
            ))}



        </Grid>

    )
}

export default Servicegrid
