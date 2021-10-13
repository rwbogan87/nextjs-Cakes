import Link from 'next/link';
import { Fragment, useState } from 'react';
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

import styled from 'styled-components';

const ImageHover = styled.img`
    z-index: -1;
    transition: transform .3s;
    :hover {
        -ms-transform: scale(1.5); 
        -webkit-transform: scale(1.5); 
        transform: scale(1.5); 
    }
`
//* our-domain.com/cakes

const picsArray = [
    {
        label: "First Picture",
        imgPath:
            "../assets/cake_beach.jpg",
    },
    {
        label: "Second Picture",
        imgPath:
            "../assets/cake_butterflies.jpg",
    },
    {
        label: "Third Picture",
        imgPath:
            "../assets/cake_doctor.jpg",
    },
    {
        label: "Fourth Picture",
        imgPath:
            "../assets/cake_engineering.jpg",
    },
    {
        label: "Fifth Picture",
        imgPath:
            "../assets/cake_football.jpg",
    },
    {
        label: "Sixth Picture",
        imgPath:
            "../assets/cake_nutella.jpg",
    },
]

function Cakes() {

    const PictureCollection = picsArray.length;
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }; const goToPrevPicture = () => {
        activeStep > 0 ?
            (setActiveStep((prevActiveStep) => prevActiveStep - 1)) :
            (null)
    };

    console.log(activeStep)

    return (
        <Fragment>
            <h1>The Cakes Page</h1>
            <Link href="/">
                <p>Home</p>
            </Link>
            {/* //! learning material */}
            {/* <ul>
                <li>
                    <Link href='/cakes/NextJs is cool'>
                        Faster
                    </Link>

                </li>
                <li>
                    <a href='/cakes/NextJs is cool'>
                        Slower
                    </a>
                </li>
            </ul> */}

            {/*//! image slider */}
            <div
                style={{
                    marginLeft: "40%",
                }}
            >
                <h2>My Pictures</h2>
                <div
                    style={{
                        maxWidth: 400,
                        flexGrow: 1,
                    }}
                >
                    <Paper
                        square
                        elevation={0}
                        style={{
                            height: 50,
                            display: "flex",
                            paddingLeft: theme.spacing(4),
                            backgroundColor: theme.palette.background.default,
                            alignItems: "center",
                        }}
                    >
                        <Typography>{picsArray[activeStep].label}</Typography>
                    </Paper>
                    <ImageHover
                        src={picsArray[activeStep].imgPath}
                        style={{
                            height: 255,
                            maxWidth: 400,
                            display: "block",
                            overflow: "hidden",
                        }}
                        alt={picsArray[activeStep].label}
                    />
                    <MobileStepper
                        variant="text"
                        position="static"
                        activeStep={activeStep}
                        steps={PictureCollection}
                        nextButton={
                            <Button
                                size="small"
                                onClick={goToNextPicture}
                                disabled={activeStep === PictureCollection - 1}
                            >
                                Next
                                {theme.direction !== "rtl" ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                size="small"
                                onClick={goToPrevPicture}
                                disabled={activeStep === PictureCollection + 1}
                            >
                                Previous
                                {theme.direction == "rtl" ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    null
                                )}
                            </Button>
                        }
                    />
                </div>
            </div>
            );
        </Fragment>
    )
}

export default Cakes