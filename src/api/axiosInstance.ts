import axios from 'axios';
// import { store } from '../store/store';

export const axiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json'},
    baseURL: import.meta.env.VITE_EVENT_API
});

axiosInstance.interceptors.request.use((config) => {
    // const { auth: { accessToken } } = store.getState();
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
});
