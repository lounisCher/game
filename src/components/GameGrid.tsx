import useGame from '../hooks/useGame';
import {Text} from '@chakra-ui/react';


const GameGrid = () => {
    const {games, errors}=useGame()
  return (
    <div>
        {errors && <Text>{errors}</Text>}
        {games.map(game=><li key={game.id}>{game.name}</li>)}
    </div>
  )
}

export default GameGrid
