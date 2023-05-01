import React from 'react'
import { Box, Typography } from '@mui/material';
import styles from "./indeeex.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Card(props) {
    const { img, title, subtitle } = props;

    return (
        <Box className={styles.body2}>
            <Box className={styles.innbody2}>
                <img className={styles.bodeimg2} src={img}></img>
            </Box>
            <Box className={styles.innbodybuttom2}>
                <Typography className={styles.title2}>
                    {title}
                </Typography>
                <Typography className={styles.subtitle2}>
                    {subtitle}
                </Typography>

                <Box className={styles.icons2}>
                    <TwitterIcon />
                    <LinkedInIcon />
                    <InstagramIcon />

                </Box>
            </Box>


        </Box>
    )
}

export default Card
