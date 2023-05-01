import axiosInstance from '../axios';
// import {SECRET_KEY} from "config.js";
// import Cookies from 'universal-cookie';

export const UserLogin = (model) => {
    return axiosInstance.post(`/auth/`, model);
}
export const UserRegister = (model) => {
    // eslint-disable-next-line no-debugger
debugger
    return axiosInstance.post(`/api/users/`, model);
}