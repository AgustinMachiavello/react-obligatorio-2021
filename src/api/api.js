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
        if (typeof response.msg !== 'object') {
            return [response.msg]
        }
        else {
            let errors = ''
            for(const m in response.msg){
                errors += response.msg[m][0] + ' '
            }
            return[errors]
        }
    }
    return
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('TOKEN'));
}

export const setToken = (token) => {
    return localStorage.setItem('TOKEN', JSON.stringify(token));
}
