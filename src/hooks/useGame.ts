import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
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

    useInfiniteQuery<FetchData<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1})=>apiClient.getAll({
            params: 
            {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam:(lastPage, allPages) =>{
            return lastPage.next ?allPages.length+1 : undefined;
        }

    })
export default useGame;
