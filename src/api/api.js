const BASE_URL = 'http://plan-nature.000webhostapp.com/api/obligatorio/'

const axios = require('axios');

export async function fetchAPI(path, options) {
    return axios(BASE_URL + path, options)
}

export const getToken = () => {
    return localStorage.getItem('TOKEN');
}

export const setToken = (e) => {
    return localStorage.setItem('TOKEN', JSON.stringify(e.token));
}
