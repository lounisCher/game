import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import { FetchData } from '../services/api-client';

export interface Platfrom{
    id: number;
    name: string;
    slug: string;

};

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platfrom}[];
    metacritic: number;
    rating_top: number;
};


const useGame = (gameQuery: GameQuery) => 

    useQuery<FetchData<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ()=>apiClient.get<FetchData<Game>>("/games", {
            params: 
            {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        })
        .then(res=>res.data),

    })
export default useGame;
