import axiosInstance from 'axios.js';
// import {SECRET_KEY} from "config.js";
// import Cookies from 'universal-cookie';

export const UserLogin = (model) => {
    return axiosInstance.post(`/auth/`, model);
}
export const UserRegister = (model) => {
    return axiosInstance.post(`/api/users/`, model);
}