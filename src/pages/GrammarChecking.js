import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button ,Stack,Tooltip} from '@mui/material';

import { AppConversionRates } from '../sections/@dashboard/app';

// components
import Iconify from '../components/iconify';

// const urduWords = []

const GrammarChecking = () => {
    const theme = useTheme();
    const [urduText, setUrduText] = useState('');


    const handleButtonClick = (word) => {
        // setUrduText(urduText + ' ' + word); // Append clicked word to current urduText
        // setUrduText(`${urduText}  ${word}`);
    };
    const handleTextChange = (event) => {
        setUrduText(event.target.value);
    }

    console.log("Urdu Text is", urduText)

    return (
        <>
            <Helmet>
                <title> Dashboard | Grammar Checking</title>
            </Helmet>

            <Container maxWidth="xl">
                
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4"  color="primary">
                    Grammar Checking
                    </Typography>
                    <Typography variant="h4"  color="primary">
                    گرامر چیک کرنا
                    </Typography>
                </Stack>


                <Grid container spacing={3} alignItems="center" justifyContent="center">

                    <Grid item xs={12} sm={12} md={8}>
                        <TextField
                            label="اپنی اردو یہاں لکھیں۔"
                            multiline
                            rows={12}
                            value={urduText}
                            inputProps={{
                                style: {
                                    direction: 'rtl', // Set text direction to right-to-left
                                    textAlign: 'right', // Set text alignment to right
                                    fontFamily: 'Nastaliq', // Use a Urdu-specific font for better display
                                },
                            }}
                            fullWidth
                            onChange={handleTextChange}
                        // Additional TextField props as needed
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center" justifyContent="center" style={{
                    marginTop: "2px"
                }}>
                     <Tooltip title="گرامر چیک کریں" arrow>
                     <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{
                            margin: "30px 10px 10px 10px",
                            direction: 'rtl', // Set text direction to right-to-left
                            textAlign: 'right', // Set text alignment to right
                            fontFamily: 'Nastaliq',
                            fontSize: "14pt",
                        }}

                        onClick={() => handleButtonClick()}
                    >
                        Check Grammar
                    </Button>
                     </Tooltip>
                    

                </Grid>
                <Grid container spacing={3} alignItems="center" justifyContent="center" style={{
                    marginTop: "2px"
                }}>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates
                            title="Probablity"
                            chartData={[
                                { label: 'Correct', value: 60 },
                                { label: 'Incorrect', value: 40 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main
                            ]}
                        />
                    </Grid>

                </Grid>

            </Container>
        </>
    )
}

export default GrammarChecking
