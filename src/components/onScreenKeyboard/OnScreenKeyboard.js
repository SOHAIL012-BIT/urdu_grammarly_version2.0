import React, { useState, useEffect, useReducer } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
// import { Dialog, DialogContent } from '@material-ui/core';
import { Grid, Container, Typography, TextField, Button, Stack, Tooltip } from '@mui/material';


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

const OnScreenKeyboard = ({open, closemodal}) => {
  return (
    <div>
       <Dialog
        open={open}
        onClose={closemodal}
        PaperComponent={PaperComponent}
        aria-labelledby="customized-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        {/* <DialogContent>
            Hello World
            <button onClick={() => closemodal() }>Close</button>

            </DialogContent> */}
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => closemodal()}>
            Cancel
          </Button>
          <Button onClick={() => closemodal()}>Subscribe</Button>
        </DialogActions>
         </Dialog>   
    </div>
  )
}

export default OnScreenKeyboard
