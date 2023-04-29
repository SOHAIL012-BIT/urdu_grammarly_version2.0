import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const toaster = (msg,severity) => {

    let bgcolor = "";
    if(severity === "success") {
        bgcolor = "#42ba96";
    }
    else if(severity === "error"){
        bgcolor = "#ff0033";
    }
    else if(severity === "warning"){
        bgcolor = "#ff9800";
    }
    else if(severity === "info"){
        bgcolor = "#007AFF";
    }
    else{
        bgcolor = "#00b3ff";
    }

    // return Toastify({
    //     text: msg,
    //     className: severity,
    //     style: {
    //         background: "linear-gradient(to right, #00b09b, #96c93d)",
    //     }
    // }).showToast();

    return Toastify({
        text: msg,
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toaster on hover
        style: {
          background: bgcolor,
          fontSize: "18px"
        },
        onClick(){}  // Callback after click
      }).showToast();
};

