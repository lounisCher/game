
import useData from './useData';
import genres from '../data/genres';
import { data } from 'framer-motion/client';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
};



const useGenres=()=>({data: genres, isLoading: false, errors: null});
export default useGenres;