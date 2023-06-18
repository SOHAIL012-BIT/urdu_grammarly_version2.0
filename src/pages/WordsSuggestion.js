import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';


import { toaster } from '../utils/toaster';
import OnScreenKeyboard from '../components/onScreenKeyboard/OnScreenKeyboard';


// API Call
import { wordSuggestion } from '../services/applicationServices'

// Files functions
import { saveDocAsFile, savePdfAsFile, copytoClipBoard, StatusBar } from "../utils/filesexport"


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
  const theme = useTheme();
  const [loader,setLoader]=useState(false);
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [currentContext, setCurrentContext] = useState("");
  const [isSpace, setIsSpace] = useState(false)


  const wordSuggestions = () => {
    // alert("API Called")
    setLoader(true)
    // eslint-disable-next-line no-debugger
    debugger
    wordSuggestion(urduText).then(({ data }) => {
      // eslint-disable-next-line no-debugger
      debugger
      if (data.message === "Words List Fected Successfully") {
        // eslint-disable-next-line no-debugger
        debugger
        setSuggestedWords(data.result)
        console.log("Data is", data)
        setLoader(false)
        setIsSpace(false)
      } else {
        toaster(data.message, "error")
        setLoader(false)
      }
    })
      .catch(error => {
        // eslint-disable-next-line no-debugger
        debugger
        console.log("Error is", error)
        toaster("Something went wrong", "error")
        setLoader(false)
      })
  }


  useEffect(() => {
    // const words = urduText.split(' ');

    // console.log("Orignal Text is",urduText)
    // console.log("Splitted text is",words)
    const words = urduText.split(' ').filter(word => word.trim() !== '');

    console.log("Original Text is", urduText);
    console.log("Split text is", words);

    // eslint-disable-next-line no-debugger
    // debugger
    console.log("Last index length is", words[words.length - 1]?.length)
    // eslint-disable-next-line no-debugger
    // debugger
    // if (words.length > 0 && words[words.length - 1].length > 3 && isSpace) {
      if (words.length > 0 && isSpace) {
      // callFunction();
      console.log("Word is ", words[words.length - 1])
      wordSuggestions()
    }


  }, [urduText])


  const handleButtonClick = (word) => {
    // setCurrentWord(word)
    setUrduText(`${urduText}  ${word}`);
    // wordSuggestions();
  };
  const handleTextChange = (event) => {
    console.log("Event in Check is", event.target.value)
    // if(event.target.value===" "){
    //   console.log("Space CLicked")
    //   setIsSpace(true)
    // }
    setUrduText(event.target.value);
    // setCurrentContext(event.target.value);
  }

  const handleKeyPress = (event) => {
    console.log("Key pressed is ",event );

    // code:"Space"
    if (event.code === "Space"|| event.charCode===32) {
      setIsSpace(true)
    } else {
      setIsSpace(false)
    }

    // if(event.charCode===46 ||event.charCode===45){
    //   setCurrentContext("");
    // }
  }


  console.log("Urdu Text is", urduText)

  const handleDataFromChild = (data, button) => {
    console.log("In Parent Data fron Child Button is", button)
    if(button==="{space}"|| button==="{tab}"){
      // console.log("Hello g")
      setIsSpace(true)
    }
    setUrduText(data);
  };



  const handleCloseTarget = () => {

    setShouldOpenDialog(false);
  };
  console.log('Urdu Text is', urduText.length);


  const handleSpeedDialClick = (actionName) => {

    console.log(`Clicked ${actionName}`);
    if (actionName === 'Copy To clipboard') {
      copytoClipBoard(urduText)
    } else if (actionName === 'Open Keyboard') {
      setUrduText(`${urduText} `);
      setShouldOpenDialog(true);
    }

    if (actionName === 'Export PDF') {
      savePdfAsFile(urduText);
    } else if (actionName === 'Export Word Doc') {
      saveDocAsFile(urduText);
    }
  };

  console.log("Urdu Text is", urduText)

  const actions = [
    {
      icon: <Iconify icon="material-symbols:keyboard-alt-outline" color="#323439" vFlip width="80%" height="80%" />,
      name: 'Open Keyboard',
    },
    {
      icon: <Iconify icon="foundation:page-export-pdf" color="#323439" vFlip width="80%" height="90%" />,
      name: 'Export PDF',
    },
    {
      icon: <Iconify icon="carbon:document-word-processor-reference" color="#323439" vFlip width="80%" height="90%" />,
      name: 'Export Word Doc',
    },
    {
      icon: <Iconify icon="pajamas:copy-to-clipboard" color="#323439" vFlip width="80%" height="80%" />,
      name: 'Copy To clipboard',
    },
    // { icon: <Iconify icon="eva:close-fill" color="red" />, name: 'Share' },
  ];

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
            {(suggestedWords.length === 0) ?
            <Grid item xs={12} sm={12} md={4} direction="rtl">
              {(loader)? <CircularProgress />:<Typography variant="h4" sx={{ mb: 5 }} color="primary">
                No Suggested Words
              </Typography>}
              
            </Grid>:
            <div>
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
            ))}</div>
          }

          </Grid>
         

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
              onKeyPress={(e) => handleKeyPress(e)}
            // Additional TextField props as needed
            />
            <StatusBar text={urduText} />
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

        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            '& .MuiSpeedDial-fab': {
              backgroundColor: '#323439',
              '&:hover': {
                backgroundColor: '#323439',
              },
              '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                transform: 'translate(25%, 25%)',
              },
              '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                transform: 'translate(-25%, -25%)',
              },
              '&.MuiSpeedDial-open': {
                backgroundColor: '#323439',
              },
            },
            zIndex: 1000,
          }}
          icon={<SpeedDialIcon />}
        // onClick={(event) => handleSpeedDialClick(event, action.name)}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              // onClick={handleSpeedDialClick(action.name)}
              onClick={() => handleSpeedDialClick(action.name)}
            />
          ))}
        </SpeedDial>

        {shouldOpenDialog && (
          <OnScreenKeyboard
            open={shouldOpenDialog}
            closemodal={handleCloseTarget}
            inputText={urduText}
            sendDataToParent={handleDataFromChild}
          />
        )}
      </Container>
    </>
  )
}

export default WordsSuggestion
