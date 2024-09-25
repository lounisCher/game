import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client";

interface Screenshot{
    id: number;
    image: string;
    height: number
}



const useScreenShots=(gameId:number)=>{

    const queryClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)    

    return useQuery({
            queryKey: ["screenshots", gameId],
            queryFn: queryClient.getAll,
    });
}

export default useScreenShots;
