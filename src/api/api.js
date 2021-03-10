const BASE_URL = 'https://plan-nature.000webhostapp.com/api/obligatorio/'

export const fetchAPI = (path, data, method) => {
    const params = Object.entries(data);
    let uri = ''
    for(const d in params) {
        if(d !== '0') {
            uri += `&${params[d][0]}=${params[d][1]}`
        }
        else {
            uri += `?${params[d][0]}=${params[d][1]}`
        }
    }
    return fetch(BASE_URL + path + uri, { method: method }).then(res => res.json());
}

export const getError = (response) => {
    if (response.status === 'ERROR') {
        return [response.msg]
    }
    return
}

export const getToken = () => {
    return localStorage.getItem('TOKEN');
}

export const setToken = (token) => {
    return localStorage.setItem('TOKEN', JSON.stringify(token));
}
