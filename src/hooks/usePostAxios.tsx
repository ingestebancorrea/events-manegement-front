import { useState } from 'react';
import { AxiosError } from 'axios';
import { axiosInstance } from '../api/axiosInstance';
import { useAlerts } from './useAlerts';

export const useAxiosPost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const { handleClickAlert } = useAlerts();

    const postData = async (url: string, body?: object) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.post(url, body);
            setData(response.data);
            handleClickAlert({
                message: response.data.msg,
                options: {
                    variant: "success",
                },
            });
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError && error.response) {
                console.log(`Status: ${error.response.status}`);
                console.log(`Message: ${error.response.data.msg}`);
                handleClickAlert({
                    message: error.response.data.msg,
                    options: {
                        variant: "error",
                    },
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        data,
        setData,
        postData,
    };
};
