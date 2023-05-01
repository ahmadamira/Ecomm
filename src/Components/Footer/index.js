import React from 'react'
import { Container, Grid, Typography, Box } from "@mui/material";
import style from "./index.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <footer className={style.body9}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid className={style.grid9} item xs={12} sm={6} md={2}>
                        <Typography className={style.title9} >Exclusive</Typography>
                        <Typography className={style.subtitle9} >Subscribe</Typography>
                        <Typography className={style.subtitle9} >Get 10% off your first order</Typography>
                        <img src='./imgs/email.png'></img>
                    </Grid>
                    <Grid className={style.grid9} item xs={12} sm={6} md={2}>
                        <Typography className={style.title9} >Support</Typography>
                        <Typography className={style.subtitle9} >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
                        <Typography className={style.subtitle9} >exclusive@gmail.com</Typography>
                        <Typography className={style.subtitle9} >+88015-88888-9999</Typography>
                    </Grid>
                    <Grid className={style.grid9} item xs={12} sm={6} md={2}>
                        <Typography className={style.title9} >Account</Typography>
                        <Typography className={style.subtitle9} >My Account</Typography>
                        <Typography className={style.subtitle9} >Login / Register</Typography>
                        <Typography className={style.subtitle9} >Cart</Typography>
                        <Typography className={style.subtitle9} >Wishlist</Typography>
                        <Typography className={style.subtitle9} >Shop</Typography>
                    </Grid>
                    <Grid className={style.grid9} item xs={12} sm={6} md={2}>
                        <Typography className={style.title9} >Quick Link</Typography>
                        <Typography className={style.subtitle9} >Privacy Policy</Typography>
                        <Typography className={style.subtitle9} >Terms Of Use</Typography>
                        <Typography className={style.subtitle9} >FAQ</Typography>
                        <Typography className={style.subtitle9} >Contact</Typography>
                    </Grid>
                    <Grid className={style.grid9} item xs={12} md={4}>
                        <Typography className={style.title9} >Download App</Typography>
                        <Typography className={style.subtitle9} >Save $3 with App New User Only</Typography>
                        <Box className={style.footerimg9}>
                            <img src='./imgs/Qrcode 1.png'></img>
                            <Box className={style.footerimgin9}>
                                <img src='./imgs/play.png'></img>
                                <img src='./imgs/download-appstore.png'></img>
                            </Box>
                        </Box>
                        <Box className={style.footerimg9}>
                            <TwitterIcon sx={{ color: "white" }} />
                            <LinkedInIcon sx={{ color: "white" }} />
                            <InstagramIcon sx={{ color: "white" }} />


                        </Box>

                    </Grid>
                </Grid>
                <Box
                    className={style.navup}


                >
                    <Typography className={style.navtxt}>
                        Copyright Rimel 2022. All right reserved
                    </Typography>
                </Box>
            </Container>
        </footer>
    )
}

export default Footer
