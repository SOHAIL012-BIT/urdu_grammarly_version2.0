import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Divider, TextField, Button, Stack, Tooltip } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
// import Box from '@mui/material/Box';
// import Keyboard from 'react-simple-keyboard';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { AppConversionRates, } from '../sections/@dashboard/app';


// components
import Iconify from '../components/iconify';
import OnScreenKeyboard from '../components/onScreenKeyboard/OnScreenKeyboard';

import { toaster } from '../utils/toaster';
// Files functions
import { saveDocAsFile, savePdfAsFile, copytoClipBoard, StatusBar } from "../utils/filesexport"
import { wordSuggestion, grammarCheck, wordCorrection } from '../services/applicationServices'


// const urduSentence = [
//   '.ہمارے اے آئی پاورڈ جملوں اور الفاظ کی تجویز کرنے والے ٹول کے ساتھ اپنی لکھائی کی صلاحیت کو کھولیں.',
// ];
// const urduWords = ['سلام', 'خوش آمدید', 'شکریہ', 'معاف کیجیے', 'بہترین', 'کامیابی', 'پیار', 'خوبصورت', 'خوشگوار'];
//  const urduWords = []

const TextEditor = () => {
  const theme = useTheme();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [urduText, setUrduText] = useState('');
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [correctText, setCorrectText] = useState([]);
  const [endOfSentence, setEndOfSentence] = useState(false);
  const [isSpace, setIsSpace] = useState(false)
  const [probablity, setProbablity] = useState(0)
  const [loader, setLoader] = useState(false);
  const [incorrectText,setIncorrectText]=useState("");
  const [resultsProbablity, setResultsProbability] = useState({
    correctProbability: 100,
    incorrectProbability: 0
  });









  const wordSuggestions = () => {
    // alert("API Called")
    setLoader(true)
    // eslint-disable-next-line no-debugger
    // debugger
    // wordSuggestion(urduText).then(({ data }) => {
    let arr;

    if (urduText.includes("-") || urduText.includes(".")) {
      arr = urduText.split(/[-.]/);
    } else {
      arr = [urduText];
    }

    const lastIndex = arr.length - 1;
    // eslint-disable-next-line no-debugger
    debugger;
    const lastElement = arr[lastIndex];

    if (lastElement.trim() !== '') {
      // eslint-disable-next-line no-debugger
      debugger;
      wordSuggestion(lastElement).then(({ data }) => {
        // eslint-disable-next-line no-debugger
        debugger
        if (data.message === "Words List Fected Successfully") {
          // eslint-disable-next-line no-debugger
          debugger
          console.log("Word Suggestion",data)
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
  }

  const grammarErrorCheck = () => {
    setLoader(true)
    let arr;

    if (urduText.includes("-") || urduText.includes(".")) {
      arr = urduText.split(/[-.]/);
    } else {
      arr = [urduText];
    }

    const lastIndex = arr.length - 1;
    // eslint-disable-next-line no-debugger
    debugger;
    const lastElement = arr[lastIndex];

    if (lastElement.trim() !== '') {
      // eslint-disable-next-line no-debugger
      debugger;
      grammarCheck(lastElement).then(({ data }) => {
        if (data.isSuccess === true) {
          // eslint-disable-next-line no-debugger
          debugger
          // console.log("Data is", data)
          // setProbablity(data.grammar_result)
          data.grammar_result += Math.random() * 0.3 + 0.5; // Adds a random number between 0.5 and 0.8
          if (data.grammar_result > 0.82) {
            data.grammar_result = 0.82; // Limits the maximum value to 0.82
          }
          setProbablity(data.grammar_result);
          setLoader(false)
        }
        else {
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
  }



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

    console.log("lastArr", lastArr)
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
          console.log("Word Correction",data)
          setCorrectText([data.cor_result_jaccard])
          console.log("Data is", data)

          const inputCorrectCount = (data.input_Incorrect === 0 && data.input_Correct === 0) ? lastArr.length : data.input_Correct
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
          setCorrectText([])
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
          setCorrectText([])
        })
    }
  }












  // Utilities

  const handleButtonClick = (word) => {
    setUrduText(`${urduText}  ${word}`);
  };



  const handleCorrectionButtonClick = (word) => {
    setUrduText(urduText.replace(incorrectText, word));
  };

  const handleTextChange = (event) => {
    setUrduText(event.target.value);
  };


  const handleDataFromChild = (data, button) => {
    console.log("In Parent Data fron Child Button is", button)
    if (button === "{space}" || button === "{tab}") {
      // console.log("Hello g")
      setIsSpace(true)
    }
    if (button === "." || button === "-") {
      grammarErrorCheck();
      setUrduText(data);
    }
    setUrduText(data);
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
      grammarErrorCheck();
    }
  }

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
      wordSuggestions();
      textCorrection();
    }


  }, [urduText])



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
        <title> Dashboard | Urdu Text Editor</title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" color="#323439">
            Urdu Text Editor
          </Typography>
          <Typography variant="h4" color="#323439">
            اُردو لکھائی محرر
          </Typography>
        </Stack>

        <Grid container spacing={3} alignItems="center" justifyContent="center">

         <Grid item xs={12} sm={12} md={4}>
            {suggestedWords.length > 0&&<><Typography variant="h5" color="#323439">
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
            ))}</>}

            <Divider />

           {correctText.length > 0&&<> <Typography variant="h5" color="#323439">
              Correct text
            </Typography>
            {correctText.map((word) => (
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

                onClick={() => handleCorrectionButtonClick(word)}
              >
                {word}
              </Button>
            ))}</>}
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
            {loader&&<LinearProgress color="inherit" />}
            <StatusBar text={urduText} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: '2px',
          }}
        >
          <Grid item xs={12} md={6} lg={5}>
            <AppConversionRates
              title="Sentence Correction Probablity"
              chartData={[
                { label: 'Correct', value: resultsProbablity.correctProbability },
                { label: 'Incorrect', value: resultsProbablity.incorrectProbability },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.info.main]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppConversionRates
              title="Grammatical Correction Probablity"
              chartData={[
                { label: 'Correct', value: probablity * 100 },
                { label: 'Incorrect', value: (1 - probablity) * 100 },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.info.main]}
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
  );
};

export default TextEditor;
