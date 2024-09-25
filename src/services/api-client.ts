import axios, { AxiosRequestConfig } from 'axios';

export interface FetchData<T>{
    count: number;
    results: T[];
    next: string | null;
};

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:'2688813ce6934e0eb492a38d107ebeb5'
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint=endpoint;
    }
    getAll = (config: AxiosRequestConfig)=>{
        return axiosInstance
                .get<FetchData<T>>(this.endpoint, config)
                .then(res=>res.data);
    }
    get = (id: number | string ) =>{
        return axiosInstance.get<T>(this.endpoint + '/' + id)
        .then(res=>res.data)
    }
}
export default APIClient;

