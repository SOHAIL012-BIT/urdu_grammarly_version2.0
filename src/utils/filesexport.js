import React, {useState,useEffect} from 'react';
import { Grid,IconButton  } from '@material-ui/core';
import {toaster} from "./toaster"

export function StatusBar({ text }) {
  // const { speak } = useSpeechSynthesis();
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [speakingTime, setSpeakingTime] = useState(0);

  useEffect(() => {
    // Calculate word count
    const words = text.trim().split(/\s+/);

    console.log("WOrds Length is",text.length)
    setWordCount((text.length)===0?0:words.length);

    // Calculate character count
    const chars = text.trim().length;
    setCharCount(chars);

    // Calculate reading time (assumes average reading speed of 200 words per minute)
    const minutes =(text.length)===0?0: words.length / 200;
    setReadingTime(Math.ceil(minutes));

    // Calculate speaking time (assumes average speaking speed of 125 words per minute)
    const speakingMinutes =(text.length)===0?0: words.length / 125;
    setSpeakingTime(Math.ceil(speakingMinutes));
  }, [text]);

  // const handleSpeakClick = () => {
  //   if (text.trim() !== '') {
  //     speak({ text });
  //   }
  // };


  return (
    <Grid container alignItems="center" justify="space-between" className="status-bar" style={{
      backgroundColor: '#323439',
      padding: '10px',
      marginTop: '.5rem',
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '5px',
      color: "#ffffff",
      boxShadow: "#323439 1.95px 1.95px 2.6px",

    }}>
      <Grid item>{`${wordCount} words`}</Grid>
      <Grid item>{`${charCount} characters`}</Grid>
      <Grid item>{`${readingTime} min read`}</Grid>
      <Grid item>{`${speakingTime} min speak`}</Grid>
      {/* <Grid item>
        <IconButton onClick={handleSpeakClick}>
          <VolumeUp />
        </IconButton>
       </Grid>  */}
    </Grid>
  );
}



const getFormattedDateTime=()=> {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    return formattedDateTime;
  }
  
  const fileName = `UrduGrammarly_${getFormattedDateTime()}`;
  


export function saveDocAsFile(urduText){
    const textToSave = urduText;
    const textToSaveAsBlob = new Blob([textToSave], { type: 'text/Doc' });
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    // var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    // const fileNameToSaveAs = 'TypingTester.doc';
    const fileNameToSaveAs=`${fileName}.doc`;

    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

 export function savePdfAsFile(urduText){
    const textToSave = urduText;
    const textToSaveAsBlob = new Blob([textToSave], { type: 'application/pdf' });
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    // const fileNameToSaveAs = 'TypingTester.pdf';
    const fileNameToSaveAs=`${fileName}.pdf`;

    const downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }

 export const copytoClipBoard=(urduText)=>{
    navigator.clipboard
        .writeText(urduText)
        .then(() => {
            if(urduText!==''){
                console.log('Copied to clipboard:', urduText);
                toaster("Copied to clipboard", "success");
            }else{
                toaster("No text to copy", "info");
            }
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
          toaster("Error copying to clipboard", "info");
        });
  }

//   export default {saveDocAsFile,savePdfAsFile,copytoClipBoard}