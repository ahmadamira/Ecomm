import React from 'react'

import { Container, Grid, Typography, Box } from "@mui/material";
import styles from "./cardgridd.module.css"
import Card from '../Card';


const carddata = [
    { img: './imgs/image 46.png', title: 'Tom Cruise', subtitle: 'Founder & Chairman' },
    { img: './imgs/image 51.png', title: 'Emma Watson', subtitle: 'Managing Director' },
    { img: './imgs/image 47.png', title: 'Will Smith', subtitle: 'Product Designer' },

];

const Cardgrid = () => {
    return (
        <Grid className={styles.body4} container spacing={5}>
            {carddata.map((obj) => (
                <Card img={obj.img} title={obj.title} subtitle={obj.subtitle} />
            ))}

        </Grid>

    )
}

export default Cardgrid
