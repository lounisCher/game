import {useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import {CanceledError} from 'axios'

export interface Game {
    id: number,
    name: string,
    background_image: string;
}

interface fetchGames{
    count: number,
    results: Game[],
}

const useGame = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [errors, setErrors] = useState("");

   useEffect(()=>{
    const controller = new AbortController();

    apiClient.get<fetchGames>("/games", {signal: controller.signal} )
     .then(res=>setGames(res.data.results))
     .catch((err)=>
        {
            if (err instanceof CanceledError) return;
             setErrors(err.message);
        });

    return ()=>controller.abort();
   }, []);
   return {games, errors}
}

export default useGame
