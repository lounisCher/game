import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import apiClient from "../services/api-client";
import { FetchData } from  "../services/api-client";
import { Platfrom } from "./useGame";


const usePlatforms=()=> useQuery({
    queryKey: ["platforms"],
    queryFn: ()=>apiClient.get<FetchData<Platfrom>>("/platforms/lists/parents")
                           .then(res=>res.data),
    staleTime: 24*60*60*1000,
    initialData: {count: platform.length, results:platform}                       

});

export default usePlatforms