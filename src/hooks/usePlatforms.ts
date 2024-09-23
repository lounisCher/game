import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Platfrom>("/platforms/lists/parents");

export interface Platfrom{
    id: number;
    name: string;
    slug: string;

};
const usePlatforms=()=> useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000,
    initialData: platform                       

});

export default usePlatforms