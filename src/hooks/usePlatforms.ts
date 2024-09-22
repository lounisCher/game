import platform from "../data/platform";



interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms=()=>({data: platform, errors:null});

export default usePlatforms