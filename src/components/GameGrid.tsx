import useGame from '../hooks/useGame';
import {Text, SimpleGrid} from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props{
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }:Props) => {
    const {data, errors, isLoading}=useGame(selectedGenre)
    const skeletons = [1,2,3,4,5,6];
  return (
    <div>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm: 1, md:2, lg:3, xl:3}} spacing={3} padding='10px'>
          {isLoading && skeletons.map((skeleton)=>
          <GameCardContainer  key={skeleton} >
          <GameCardSkeleton/>
          </GameCardContainer>
        )} 


          {data.map((game)=>
            <GameCardContainer key={game.id}>
              <GameCard game={game}/>
            </GameCardContainer>   
          )}
        </SimpleGrid>
        
    </div>
  )
}

export default GameGrid
