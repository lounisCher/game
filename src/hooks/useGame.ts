import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchData } from '../services/api-client';
import { Platfrom } from './usePlatforms';


const apiClient = new APIClient<Game>("/games")

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
        queryFn: ()=>apiClient.getAll({
            params: 
            {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        })

    })
export default useGame;
