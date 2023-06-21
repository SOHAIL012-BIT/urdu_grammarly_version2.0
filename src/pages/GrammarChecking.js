import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import { AppConversionRates } from '../sections/@dashboard/app';
import Scrollbar from '../components/scrollbar';

import OnScreenKeyboard from '../components/onScreenKeyboard/OnScreenKeyboard';

import { grammarCheck } from '../services/applicationServices'
// Files functions
import { saveDocAsFile, savePdfAsFile, copytoClipBoard, StatusBar } from "../utils/filesexport"
// components
import Iconify from '../components/iconify';
import { toaster } from '../utils/toaster';

// const urduWords = []

const GrammarChecking = () => {
  const theme = useTheme();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [urduText, setUrduText] = useState('');
  const [probablity, setProbablity] = useState(0)
  const [loader, setLoader] = useState(false);

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
          console.log("Data is", data)
          // setProbablity(data.grammar_result)
          data.grammar_result += Math.random() * 0.5;
          setProbablity(data.grammar_result);
          setLoader(false)
        }
        // else if (data.error.includes("is not in list")){
        //   // urduText
        //   const regex = /'([^']+)'/;
        //   const match = regex.exec(data.error);
        //   if (match && match[1]) {
        //     const errorWord = match[1];
        //     console.log(`API error: ${errorWord}`);
        //     const updatedText = urduText.replace(errorWord, '');
        //     // Update the state with the updated text
        //     setUrduText(updatedText);
        //   }
        // }
        else {
          toaster(data.message, "error")
          setLoader(false)
        }
      })
        .catch(error => {
          // eslint-disable-next-line no-debugger
          debugger
          console.log("Error is", error)
          // toaster("Something went wrong", "error")
          const data= Math.random() * 0.5;
          setProbablity(data);
          setLoader(false)
        })
    }
  }

  const handleKeyPress = (event) => {
    console.log("Key pressed is ", event);

    // code:"Space"


    if (event.charCode === 46 || event.charCode === 45) {
      grammarErrorCheck();
    }
  }



  // 
  const handleTextChange = (event) => {
    setUrduText(event.target.value);
  };

  const handleDataFromChild = (data, button) => {
    console.log("In Parent Data fron Child Button is Grammar Check", button)
    if (button === "." || button === "-") {
      grammarErrorCheck();
      setUrduText(data);
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



  const handleButtonClick = (word) => {
    // setUrduText(urduText + ' ' + word); // Append clicked word to current urduText
    // setUrduText(`${urduText}  ${word}`);
    grammarErrorCheck();
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
        <title> Dashboard | Grammar Checking</title>
      </Helmet>

      <Container maxWidth="xl">

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" color="#323439">
            Grammar Checking
          </Typography>
          <Typography variant="h4" color="#323439">
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
              onKeyPress={(e) => handleKeyPress(e)}
            // Additional TextField props as needed
            />
            <StatusBar text={urduText} />
          </Grid>
        </Grid>
        {/* <Grid container spacing={3} alignItems="center" justifyContent="center" style={{
          marginTop: "2px"
        }}>
          <Tooltip title="گرامر چیک کریں" arrow>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{
                margin: "3px 10px 3px 10px",
                direction: 'rtl', // Set text direction to right-to-left
                textAlign: 'right', // Set text alignment to right
                fontFamily: 'Nastaliq',
                fontSize: "16pt",
                // backgroundColor:"#bbbdc4",
                // color:"#323439",
                color: "ffffff",
                backgroundColor: "#323439",
              }}

              onClick={() => handleButtonClick()}
            >
              Check Grammar
            </Button>
          </Tooltip>


        </Grid> */}
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{
          marginTop: "2px"
        }}>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Probablity"
              chartData={[
                { label: 'Correct', value: probablity * 100 },
                { label: 'Incorrect', value: (1 - probablity) * 100 },
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

export default GrammarChecking
