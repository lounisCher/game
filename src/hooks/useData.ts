import {CanceledError, AxiosRequestConfig} from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';


interface FetchData<T>{
    count: number;
    results: T[];
};

const useData=<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[])=>{
    const [data,setData] = useState<T[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
            const controller = new AbortController();
            setIsLoading(true);
            apiClient
            .get<FetchData<T>>(endpoint, 
                {
                    signal: controller.signal, ...requestConfig
                }
            )
             .then((res)=>{
                setIsLoading(false);
                setData(res.data.results);
            })
            .catch((err)=>{
                if (err instanceof CanceledError) return;
                    setErrors(err.message);
                    setIsLoading(false);
            });
            return ()=>controller.abort();
    },deps ? [...deps] : []);
    

    return{errors, data, isLoading}
}
export default useData;
