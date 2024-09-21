import useGame from '../hooks/useGame';
import {Text, SimpleGrid} from '@chakra-ui/react';
import GameCard from './GameCard';


const GameGrid = () => {
    const {games, errors}=useGame()
  return (
    <div>
        {errors && <Text>{errors}</Text>}
        <SimpleGrid columns={{sm: 1, md:2, lg:3, xl:5}} spacing={10} padding='10px'>
          {games.map((game)=>
            <GameCard key={game.id} game={game}/>
          )}
        </SimpleGrid>
        
    </div>
  )
}

export default GameGrid
