
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
  
  const fileName = `UrduGrammarly_${getFormattedDateTime()}.doc`;
  


const saveDocAsFile=(urduText)=> {
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

  const savePdfAsFile=(urduText)=> {
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

  const copytoClipBoard=(urduText)=>{
    navigator.clipboard
        .writeText(urduText)
        .then(() => {
          console.log('Copied to clipboard:', urduText);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
  }

  export default {saveDocAsFile,savePdfAsFile}