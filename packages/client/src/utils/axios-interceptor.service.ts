import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from "../constants/config";
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
        if (error.response) {
            console.error('API call error:', error.response.data);
            toast.error(`API call error: ${error.response.data}`);
          } else if (error.request) {
            console.error('No response received:', error.request);
            toast.error('No response received from the server.');
          } else {
            console.error('Error setting up request:', error.message);
            toast.error(`Error setting up request: ${error.message}`);
          }
        return Promise.reject(error);
    }
);