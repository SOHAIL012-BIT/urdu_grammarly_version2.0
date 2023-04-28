import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';



// components
import Iconify from '../components/iconify';

const urduWords = [
    'سلام',
    'خوش آمدید',
    'شکریہ',
    'معاف کیجیے',
    'بہترین',
    'کامیابی',
    'پیار',
    'خوبصورت',
    'خوشگوار',

];
// const urduWords = []

const WordsSuggestion = () => {
    const [urduText, setUrduText] = useState('');
    const [suggestedWords, setSuggestedWords] = useState(urduWords)


    const handleButtonClick = (word) => {
        // setUrduText(urduText + ' ' + word); // Append clicked word to current urduText
        setUrduText(`${urduText}  ${word}`);
    };
    const handleTextChange = (event) => {
        setUrduText(event.target.value);
    }

    console.log("Urdu Text is", urduText)

    return (
        <>
            <Helmet>
                <title> Dashboard | Word Suggestion</title>
            </Helmet>

            <Container maxWidth="xl">
                {/* <Typography variant="h4" sx={{ mb: 5 }}>
                    Words Suggestion
                </Typography> */}
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" color="#323439">
                        Words Suggestion
                    </Typography>
                    <Typography variant="h4" color="#323439">
                    الفاظ کی تجویز
                    </Typography>
                </Stack>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={4}>
                <Typography variant="h5" color="#323439">
                       Suggested Words
                    </Typography>
                {suggestedWords.map((word) => (
                            <Button
                                key={word}
                                variant="contained"
                                color="primary"
                                size="medium"
                                style={{
                                    margin: "3px 10px 10px 10px",
                                    direction: 'rtl', // Set text direction to right-to-left
                                    textAlign: 'right', // Set text alignment to right
                                    fontFamily: 'Noto Nastaliq Urdu',
                                    letterSpacing: '0.08rem',
                                    // fontFamily: 'Noto Naskh Arabic',
                                    fontSize: "16pt",
                                    // backgroundColor:"#bbbdc4",
                                    // color:"#323439",
                                    color: "ffffff",
                                    backgroundColor: "#323439",
                                }}

                                onClick={() => handleButtonClick(word)}
                            >
                                {word}
                            </Button>
                        ))}
                    
                    </Grid>
                        {(suggestedWords.length === 0) &&
                    <Grid item xs={12} sm={12} md={4} direction="rtl">
                            <Typography variant="h4" sx={{ mb: 5 }} color="primary">
                                No Suggested Words
                            </Typography>
                    </Grid>
                        }

                    <Grid item xs={12} sm={12} md={8}>
                        <TextField
                            label="اپنی اردو یہاں لکھیں۔"
                            multiline
                            rows={15}
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


                {/* <Grid container spacing={3} alignItems="center" justifyContent="center">

                    <Grid item xs={12} sm={12} md={8}>
                        <TextField
                            label="اپنی اردو یہاں لکھیں۔"
                            multiline
                            rows={15}
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
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={8} >
                <Typography variant="h5" color="#323439">
                     Suggested Words
                    </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} direction="rtl">
                     
                        {suggestedWords.map((word) => (
                            <Button
                                key={word}
                                variant="contained"
                                color="primary"
                                size="medium"
                                style={{
                                    margin: "3px 10px 10px 10px",
                                    direction: 'rtl', // Set text direction to right-to-left
                                    textAlign: 'right', // Set text alignment to right
                                    fontFamily: 'Noto Nastaliq Urdu',
                                    letterSpacing: '0.08rem',
                                    // fontFamily: 'Noto Naskh Arabic',
                                    fontSize: "16pt",
                                    // backgroundColor:"#bbbdc4",
                                    // color:"#323439",
                                    color: "ffffff",
                                    backgroundColor: "#323439",
                                }}

                                onClick={() => handleButtonClick(word)}
                            >
                                {word}
                            </Button>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} direction="rtl">
                        {(suggestedWords.length === 0) &&
                            <Typography variant="h4" sx={{ mb: 5 }} color="primary">
                                No Suggested Words
                            </Typography>
                        }
                    </Grid>

                </Grid> */}

            </Container>
        </>
    )
}

export default WordsSuggestion
