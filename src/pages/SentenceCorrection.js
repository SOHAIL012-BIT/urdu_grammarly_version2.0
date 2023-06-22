import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { AppConversionRates, } from '../sections/@dashboard/app';
// components
import OnScreenKeyboard from '../components/onScreenKeyboard/OnScreenKeyboard';
// Files functions
import { toaster } from '../utils/toaster';
import  {saveDocAsFile,savePdfAsFile,copytoClipBoard,StatusBar} from "../utils/filesexport"
import Iconify from '../components/iconify';

import { wordCorrection } from '../services/applicationServices'


// const urduWords = [
//     '-ہمارے اے آئی پاورڈ جملوں اور الفاظ کی تجویز کرنے والے ٹول کے ساتھ اپنی لکھائی کی صلاحیت کو کھولیں',
// ];
const urduWords = []

const SentenceCorrection = () => {
  const [urduText, setUrduText] = useState('');
  const [suggestedWords, setSuggestedWords] = useState(urduWords)
  const theme = useTheme();
  const [loader, setLoader] = useState(false);
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [currentContext, setCurrentContext] = useState("");
  const [isSpace, setIsSpace] = useState(false);
  const [incorrectText,setIncorrectText]=useState("");
  const [resultsProbablity,setResultsProbability]=useState({
    correctProbability: 0,
    incorrectProbability: 0
  });






  const textCorrection = () => {
    
    let arr;

    if (urduText.includes("-") || urduText.includes(".")) {
      arr = urduText.split(/[-.]/);
    } else {
      arr = [urduText];
    }

    const lastIndex = arr.length - 1;
    // eslint-disable-next-line no-debugger
    debugger;

    let lastArr;
    const lastElement = arr[lastIndex];
    if (lastElement.includes(" ")) {
      lastArr = urduText.split(" ").filter(word => word !== "");
    }
    
    console.log("lastArr",lastArr)
    if (lastElement.trim() !== '' && lastArr.length >= 2) {
      setLoader(true)
      setIncorrectText(lastElement)
          // eslint-disable-next-line no-debugger
      debugger;
      wordCorrection(lastElement).then(({ data }) => {
      // eslint-disable-next-line no-debugger
      debugger
      if (data.message === "Text Corrected") {
        // eslint-disable-next-line no-debugger
        debugger
        setSuggestedWords([data.cor_result_jaccard])
        console.log("Data is", data)

        const inputCorrectCount=(data.input_Incorrect===0&&data.input_Correct===0)?lastArr.length:data.input_Correct
        const totalInputs = inputCorrectCount + data.input_Incorrect;
        if (totalInputs > 0) {
          const correctProb = (inputCorrectCount / totalInputs) * 100;
          const incorrectProb = (data.input_Incorrect / totalInputs) * 100;
    
          setResultsProbability({
            correctProbability: correctProb,
            incorrectProbability: incorrectProb
          });
        }





        setLoader(false)
        setIsSpace(false)
      } else if (data.message === "No Incorrect Words") {
        // eslint-disable-next-line no-debugger
        debugger
        setSuggestedWords([])
        setLoader(false)
        setIsSpace(false)
      }  else {
        toaster(data.message, "error")
        setLoader(false)
      }
    })
      .catch(error => {
        // eslint-disable-next-line no-debugger
        debugger
        console.log("Error is", error)
        // // toaster("Something went wrong", "error")
        setLoader(false)
      })
    }
  }


  useEffect(() => {
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
      textCorrection()
    }


  }, [urduText])


















    const handleButtonClick = (word) => {
        // setUrduText(urduText + ' ' + word); // Append clicked word to current urduText
        // setUrduText(`${urduText}  ${word}`);

        setUrduText(urduText.replace(incorrectText, word));
    };
    

    const handleKeyPress = (event) => {
      console.log("Key pressed is ", event);
  
      // code:"Space"
      if (event.code === "Space" || event.charCode === 32) {
        setIsSpace(true)
      } else {
        setIsSpace(false)
      }
  
      if (event.charCode === 46 || event.charCode === 45) {
        console.log("Senence Completed")
        textCorrection()
        setCurrentContext("");
      }
    }


    console.log("Urdu Text is", urduText)
 
    const handleTextChange = (event) => {
      setUrduText(event.target.value);
    };
  
    const handleDataFromChild = (data,button) => {
      console.log("In Parent Data fron Child Button is",button)
      if (button === "." || button === "-") {
        textCorrection();
      }
      setUrduText(data);
    };
    const handleCloseTarget = () => {
    
      setShouldOpenDialog(false);    
    };
  console.log('Lst Index is', urduText[urduText.length-1]);
  
  
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
      ];
    return (
        <>
            <Helmet>
                <title> Dashboard | Text Correction</title>
            </Helmet>
          
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" color="#323439">
                        Text Correction
                    </Typography>
                    <Typography variant="h4" color="#323439">
                    متن کی تصحیح
                    </Typography>
                </Stack>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
              {suggestedWords.length>0&&  <Grid item xs={12} sm={12} md={4}>
               <Typography variant="h5" color="#323439">
                       Correct Text
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
                   
                    </Grid>}
                     

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
                         {loader&&<LinearProgress color="inherit" />}
                        <StatusBar text={urduText} /> 
                    </Grid>
                 
            
                </Grid>
               
                {/* <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={8} >
                <Typography variant="h5" color="#323439">
                       Correct Sentence
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
                <Grid container spacing={3} alignItems="center" justifyContent="center" style={{
                    marginTop: "2px"
                }}>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates
                            title="Probablity"
                            chartData={[
                                { label: 'Correct', value: resultsProbablity.correctProbability },
                                { label: 'Incorrect', value: resultsProbablity.incorrectProbability },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main
                            ]}
                        />
                    </Grid>

                </Grid>
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

export default SentenceCorrection
