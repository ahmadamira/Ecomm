import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MobileStepper, Paper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Container, Grid, Typography, Box } from "@mui/material";
import style from "./carou.module.css"
import Card from '../Card';
const carddata = [
    { img: './imgs/image 46.png', title: 'Tom Cruise', subtitle: 'Founder & Chairman' },
    { img: './imgs/image 51.png', title: 'Emma Watson', subtitle: 'Managing Director' },
    { img: './imgs/image 47.png', title: 'Will Smith', subtitle: 'Product Designer' },

];
const carddataa = [
    { img: './imgs/image 46.png', title: 'Tom Cruise', subtitle: 'Founder & Chairman' },
    { img: './imgs/image 46.png', title: 'Emma Watson', subtitle: 'Managing Director' },
    { img: './imgs/image 46.png', title: 'Will Smith', subtitle: 'Product Designer' },

];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{/* Add your title here */}</Typography>
            </Paper>
            {/* Add your carousel content here */}
            {activeStep === 0 && (
                <Grid className={style.body4} container spacing={5}>
                    {carddata.map((obj) => (
                        <Card img={obj.img} title={obj.title} subtitle={obj.subtitle} />
                    ))}

                </Grid>
            )}
            {activeStep === 1 && (
                <Grid className={style.body4} container spacing={5}>
                    {carddataa.map((obj) => (
                        <Card img={obj.img} title={obj.title} subtitle={obj.subtitle} />
                    ))}

                </Grid>
            )}
            {activeStep === 2 && (
                <Grid className={style.body4} container spacing={5}>
                    {carddata.map((obj) => (
                        <Card img={obj.img} title={obj.title} subtitle={obj.subtitle} />
                    ))}

                </Grid>
            )}

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}

                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ color: 'black' }}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color: 'black' }}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
                sx={{ color: 'inherit' }}
            />
        </div>
    );
}

export default Carousel;
