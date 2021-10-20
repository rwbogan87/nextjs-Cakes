import Link from 'next/link';
import { Fragment, useState } from 'react';
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import styles from '../../styles/Cakes.module.css';

import styled from 'styled-components';

//! Why does the doctor cake show on initial load with mobile????

const ImageHover = styled.img`
    margin-left: auto;
    margin-right: auto;
    z-index: 99;
    transition: transform .3s;
    // hover disabled for mobile
    // :hover {
    //     -ms-transform: scale(1.25); 
    //     -webkit-transform: scale(1.25); 
    //     transform: scale(1.25); 
    // }
`
//* our-domain.com/cakes

const picsArray = [
    {
        label: "Mermaid",
        imgPath:
            "../assets/cake_beach.jpg",
        category: "Birthday"
    },
    {
        label: "Butterflies",
        imgPath:
            "../assets/cake_butterflies.jpg",
        category: "Baby Shower"
    },
    {
        label: "Doctor",
        imgPath:
            "../assets/cake_doctor.jpg",
        category: "Graduation"
    },
    {
        label: "Electrical Engineering",
        imgPath:
            "../assets/cake_engineering.jpg",
        category: "Graduation"
    },
    {
        label: "Soccer",
        imgPath:
            "../assets/cake_football.jpg",
        category: "Birthday"
    },
    {
        label: "Some Serious Chocolate",
        imgPath:
            "../assets/cake_nutella.jpg",
        category: "Birthday"
    },
]



export default function Cakes(props) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [transition, setTransition] = useState(true)
    const [category, setCategory] = useState('All');

    //*attached to image onLoad for future styling
    const onloadFunc = () => {
        // console.log('loaded')
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    useState(()=> {
        console.log('useState category:', category)
    },[category])

    const goToNextPicture = () => {
        setTransition(!transition)

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    };
    const goToPrevPicture = () => {
        (setTransition(!transition))
        activeStep > 0 ?
            (setActiveStep((prevActiveStep) => prevActiveStep - 1))
            :
            (null)
    };


    const filteredBirthdays = picsArray.filter(currentPic => {
        return currentPic.category === 'Birthday'
    })
    const filteredBabyShowers = picsArray.filter(currentPic => {
        return currentPic.category === 'Baby Shower'
    })
    const filteredGraduations = picsArray.filter(currentPic => {
        return currentPic.category === 'Graduation'
    })

    const targetArray = () => {
        if (category === 'All') {
            return (picsArray)
        } else if (category == 'Birthday') {
            return (filteredBirthdays)
        } else if (category === 'Baby Shower') {
            return (filteredBabyShowers)
        } else if (category === 'Graduation') {
            return (filteredGraduations)
        }
        else return (filteredBirthdays)
    }

    return (
        <Fragment>
            <Link href="/">
                <Button
                    style={{
                        cursor: 'pointer'
                    }}
                >Home</Button>
            </Link>

            {/*//! image slider */}
            <div
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 20,
                    paddingBottom: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* <h2 className="greatVibesFont">{category}</h2> */}
                <select className={styles.selectText}value={category} onChange={(e) => { 
                    setActiveStep(0)
                    setCategory(capitalize(e.target.value)) 
                    }}>
                    <option value='All'>All</option>
                    <option value='Birthday'>Birthday</option>
                    <option value='Baby Shower'>Baby Shower</option>
                    <option value='Graduation'>Graduation</option>
                </select>
                <div
                    style={{
                        width: 400,
                        flexGrow: 1,
                    }}
                >
                    <MobileStepper
                        style={{
                        }}
                        variant="text"
                        position="static"
                        activeStep={activeStep}
                        steps={targetArray().length}
                        nextButton={
                            <Button
                                size="small"
                                onClick={goToNextPicture}
                                disabled={activeStep === targetArray().length - 1}
                            >
                                Next
                                {theme.direction !== "rtl" ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    null
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                size="small"
                                onClick={goToPrevPicture}
                                disabled={activeStep === 0}
                            >
                                {theme.direction == "rtl" ? (
                                    null
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Prev
                            </Button>
                        }
                    />
                    <Paper
                        square
                        elevation={0}
                        style={{
                            height: 60,
                            display: "flex",
                            flexDirection: 'column',
                            backgroundColor: theme.palette.background.default,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Typography>{targetArray()
                        [activeStep].label}</Typography><br />
                        {/* <Typography>{targetArray()
                        [activeStep].category}</Typography> */}
                    </Paper>
                    <ImageHover
                        src={targetArray()
                        [activeStep].imgPath}
                        style={{
                            height: 500,
                            maxHeight: '100vh',
                            maxWidth: '100vw',
                            display: "block",
                            overflow: "hidden",

                        }}
                        alt={targetArray()
                        [activeStep].label}
                        onload={onloadFunc()}
                    />
                </div>
            </div>
        </Fragment>
    )
}

// export const getStaticProps = () => {
//     return {
//         props: {
//         }
//     }
// }
