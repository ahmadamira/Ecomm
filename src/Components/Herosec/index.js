import { Box, Typography } from '@mui/material';
import * as React from 'react';
import style from "./index.module.css"


import { styled } from '@mui/material/styles';


const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

const CustomImg = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    maxWidth: '837px',
    maxHeight: '609px',
}));

const CustomText = styled(Typography)(({ theme }) => ({


    padding: theme.spacing(2),
    flexGrow: 1,
}));
const Herosec = () => {
    return (
        <CustomBox>


            <CustomText variant="body1">
                <Typography variant='h2'>
                    Our Story
                </Typography>

                <Typography className={style.body}>
                    <br />
                    <br />
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with
                    an active presense in Bangladesh. Supported by wide range of tailored marketing, data
                    and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                    customers across the region.

                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
                    active presense in Bangladesh. Supported by wide range of tailored marketing, data and
                    service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                    customers across the region.
                    <br />
                    <br />
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
                    offers a diverse assotment in categories ranging  from consumer.
                </Typography>

            </CustomText>
            <CustomImg src={"imgs/heroimg.png"} alt="Sample" />
        </CustomBox>
    );
};

export default Herosec;
