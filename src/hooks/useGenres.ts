import {CanceledError} from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

interface Genre{
    id: number;
    name: string;
};

interface FetchGenresData{
    count: number;
    results: Genre[];
};

const useGenres=()=>{
    const [genres,setGenres] = useState<Genre[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
            const controller = new AbortController();
            setIsLoading(true);
            apiClient.get<FetchGenresData>("/genres", {signal: controller.signal})
             .then((res)=>{
                setIsLoading(false);
                setGenres(res.data.results);
            })
            .catch((err)=>{
                if (err instanceof CanceledError) return;
                    setErrors(err.message);
                    setIsLoading(false);
            });
            return ()=>controller.abort();
    }, []);
    

    return{errors, genres, isLoading}
}

export default useGenres;