import React, { useState, useEffect, useReducer,useRef } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
// import { Dialog, DialogContent } from '@material-ui/core';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import SpeedDial from '@mui/material/SpeedDial';



import Box from '@mui/material/Box';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Urdu from './Urdu';
import Iconify from '../iconify';



const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));


const myKeyboardTheme = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
  backgroundColor: "pink",
  color: "#333",
  ".hg-button": {
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "none",
    color: "#333",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
    "&.hg-active": {
      backgroundColor: "#333",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#ddd",
    },
    "&.hg-enter": {
      backgroundColor: "#4caf50",
      color: "#fff",
    },
    "&.hg-enter:active": {
      backgroundColor: "#388e3c",
    },
  },
};

const myKeyboardStyles = {
  ".react-simple-keyboard": {
    backgroundColor: "pink",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
  },
  ".hg-theme-default": {
    backgroundColor: "#954141",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
  },
  ".hg-theme-default .hg-button": {
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "none",
    color: "#333",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
    "&.hg-active": {
      backgroundColor: "#333",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#ddd",
    },
    "&.hg-enter": {
      backgroundColor: "#4caf50",
      color: "#fff",
    },
    "&.hg-enter:active": {
      backgroundColor: "#388e3c",
    },
  },
};


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const OnScreenKeyboard = ({ open, closemodal, inputText,sendDataToParent }) => {
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState(inputText);
  const keyboard = useRef(null);

  const onChange = (input) => {
    setInput(input);
    // console.log("Input changed", input);
    sendDataToParent(input);

  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    console.log("Layout Name", layoutName);
    // Handle special keys
    console.log("Button is", button)
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
    if (button === "{default}") {
      setLayoutName(layoutName === "shift" ? "default" : "shift");
    }
    if (button === "{enter}") {
      setInput(`${input} + "\n"`);
    }
    if (button === "{bksp}") {
      setInput(input.substring(0, input.length - 1));
    }
  };


  return (
    <div>
      <Dialog
        open={open}
        onClose={closemodal}
        PaperComponent={PaperComponent}
        aria-labelledby="customized-dialog-title"
        fullWidth
        maxWidth="sm"
        BackdropProps={{
          style: { backgroundColor: 'transparent' }
        }}
        PaperProps={{
          style: { backgroundColor: '#323439' ,
          fontSize:"14pt",                            
          fontFamily: 'Noto Nastaliq Urdu',
          boxShadow: `0px 0px 3px 0px #323439, 0px 0px 3px 0px #323439, 0px 0px 3px 0px #323439, 0px 0px 3px 0px #323439, 0px 0px 3px 0px #323439`,
          border: `0.5px solid #323439`,
          borderRadius: '1px'
        }
        }}
        style={{
          position: 'fixed',
          bottom:"-60vh",
          // boxShadow: `0px 0px 5px 0px #323439, 0px 0px 20px 0px #323439, 0px 0px 30px 0px #323439, 0px 0px 40px 0px #323439, 0px 0px 70px 0px #323439`,
          // border: `1px solid #323439`,
          // borderRadius: '5px',
        }}
      >

        <DialogTitle style={{ cursor: 'move',padding: 0 }} id="draggable-dialog-title">
          {/* On Screen Keyboard */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" color="white">
              On Screen Keyboard
            </Typography>
            <Button autoFocus onClick={() => closemodal()}>
            {/* Close */}
            {/* <Iconify icon="eva:close-fill" /> */}
            <Iconify icon="eva:close-fill" color="red" />
          </Button>
            </Stack>
        </DialogTitle>
        <DialogContent  style={{ padding: 0 }}>
          <Keyboard
            keyboardRef={(r) => {
              keyboard.current = r;
            }}
            
            layout={Urdu}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
            theme={"hg-theme-default hg-layout-default"}
            style={myKeyboardStyles}
            // theme={myKeyboardTheme}
            physicalKeyboardHighlight
            
          />
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={() => closemodal()}>
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  )
}

export default OnScreenKeyboard
