import {useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import {CanceledError} from 'axios'

export interface Platfrom{
    id: number;
    name: string;
    slug: string;

}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platfrom}[];
    metacritic: number;
}

interface fetchGames{
    count: number;
    results: Game[];
}

const useGame = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [errors, setErrors] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   useEffect(()=>{
    const controller = new AbortController();

    setIsLoading(true);
    apiClient.get<fetchGames>("/games", {signal: controller.signal} )
     .then(res=>{
        setIsLoading(false);
        setGames(res.data.results)
    })
     .catch((err)=>
        {
            if (err instanceof CanceledError) return;
             setErrors(err.message);
             setIsLoading(false);
        });

    return ()=>controller.abort();
   }, []);
   return {games, errors, isLoading}
}

export default useGame
