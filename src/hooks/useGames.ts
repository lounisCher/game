import { useInfiniteQuery} from '@tanstack/react-query';
import APIClient, { FetchData } from '../services/api-client';
import { Platfrom } from './usePlatforms';
import useGameQueryStore from '../store';


const apiClient = new APIClient<Game>("/games")

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platfrom}[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
};


const useGames = () => {

    const gameQuery = useGameQueryStore(s=>s.gameQuery);

   return useInfiniteQuery<FetchData<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1})=>apiClient.getAll({
            params: 
            {
                genres: gameQuery.genreId, 
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam:(lastPage, allPages) =>{
            return lastPage.next ? allPages.length+1 : undefined;
        },
        staleTime: 24*60*60*1000, //24h

    })
}

   
export default useGames;
