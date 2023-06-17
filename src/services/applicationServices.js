import axiosInstance from '../axios';
// import {SECRET_KEY} from "config.js";
// import Cookies from 'universal-cookie';

export const wordSuggestion = (model) => {
// eslint-disable-next-line no-debugger
    debugger
    return axiosInstance.post(`/prediction`, model);
}
