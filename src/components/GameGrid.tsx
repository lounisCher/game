import useGame from '../hooks/useGame';
import {Text, SimpleGrid} from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
    const {games, errors, isLoading}=useGame()
    const skeletons = [1,2,3,4,5,6];
  return (
    <div>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm: 1, md:2, lg:3, xl:3}} spacing={10} padding='10px'>
          {isLoading && skeletons.map((skeleton)=>
          <GameCardContainer>
          <GameCardSkeleton key={skeleton}/>
          </GameCardContainer>
        )} 


          {games.map((game)=>
            <GameCardContainer>
              <GameCard key={game.id} game={game}/>
            </GameCardContainer>   
          )}
        </SimpleGrid>
        
    </div>
  )
}

export default GameGrid
