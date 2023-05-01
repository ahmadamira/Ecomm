import React from 'react'

import { Container, Grid, Typography, Box } from "@mui/material";
import style from "./factgridd.module.css"
import Factcard from '../Fact';
const myArray = [
    { img: './imgs/cardimg1.png', title: '10.5k', subtitle: 'Sallers active our site', id: 0 },
    { img: './imgs/fact2.png', title: '33k', subtitle: 'Mopnthly Produduct Sale', id: 1 },
    { img: './imgs/fact3.png', title: '45.5k', subtitle: 'Customer active in site', id: 2 },
    { img: './imgs/fact4.png', title: '25.5k', subtitle: 'Anual gross sale in site', id: 3 },
];

const Factsgrid = () => {
    return (

        <Grid className={style.body3} container spacing={5}>
            {myArray.map((obj) => (
                <Factcard img={obj.img} title={obj.title} subtitle={obj.subtitle} id={obj.id} />
            ))}

        </Grid>

    )
}

export default Factsgrid
