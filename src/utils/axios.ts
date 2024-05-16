import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {}
});

const getToken = (): string | null => {
    return localStorage.getItem('token');
};

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig): any => {
        const token = getToken();
        if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
