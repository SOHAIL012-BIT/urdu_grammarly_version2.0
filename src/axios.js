import axios from "axios";
import {BaseUrl} from "./config"

const axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });


  // Sending Request 
  axiosInstance.interceptors.request.use(
    (config) => {
     
      // const localStorage = getLocalTokens()
      // const localStorage="wewaawewwwrwrwre"
      console.log("Configuration is ",config.url)
      // eslint-disable-next-line no-debugger
      debugger
      if (localStorage !== null) {
      config.headers = { 
        // 'Authorization': `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


//   Accepting response

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      console.log("err", err)
    //   if (originalConfig.url !== "/login" && originalConfig !== "/api/User/Logout"  && err.response) {
    //     // Access Token was expired
    //     if (err.response.status === 401 && !originalConfig._retry) {
    //     // if (err.response.status === 401) {
    //       originalConfig._retry = true;
  
    //       try {
  
    //           debugger
  
    //           const {userid} = getLocalStorage();
    //           const {token, refreshToken} = getLocalTokens();
  
    //           var model = {
    //               accessToken: token,
    //               refreshToken: refreshToken,
    //               usR_ID: userid
    //           } 
  
    //           RefreshToken(model).then((rs) => {
    //               debugger
    //               var {message, data} = rs.data
    //               if(message !== "Token not found"){
    //                 UpdateTokens(data.accessToken,data.refreshToken)
    //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
    //               }
    //               return axiosInstance(originalConfig);
    //               // TokenService.updateLocalAccessToken(accessToken);
    //           }).catch((error) => {
    //             console.log(error)
    //             return axiosInstance(originalConfig);
    //         })
          
    //       } 
    //       catch (_error) {
    //         return Promise.reject(_error);
    //       }
    //     }
    //   }
  
      return Promise.reject(err);
    }
  );


  export default axiosInstance;