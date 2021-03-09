const BASE_URL = 'https://jsonplaceholder.typicode.com/'


export async function fetchAPI(path, data) {
    return fetch(BASE_URL + path, data).then(res => res.json())
}

export const getToken = () => {
    return localStorage.getItem('TOKEN');
}

export const setToken = (e) => {
    return localStorage.setItem('TOKEN', JSON.stringify(e.token));
}
