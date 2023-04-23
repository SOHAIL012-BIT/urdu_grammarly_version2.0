import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button,Stack ,Tooltip } from '@mui/material';



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
                    <Typography variant="h4"  color="primary">
                    Words Suggestion
                    </Typography>
                    <Typography variant="h4"  color="primary">
                    لفظ کی تجویز
                    </Typography>
                </Stack>



                <Grid container spacing={3} alignItems="center" justifyContent="center">

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

                    <Grid item xs={12} sm={12} md={8} direction="rtl">
                        {/* <Button>Hello</Button> */}
                        {suggestedWords.map((word) => (
                            <Button
                                key={word}
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
                   
                </Grid>

            </Container>
        </>
    )
}

export default WordsSuggestion
