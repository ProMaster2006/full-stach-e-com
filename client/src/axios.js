import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const authInstance = axios.create({
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config
}

authInstance.interceptors.request.use(authInterceptor)
