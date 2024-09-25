import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';

const GameDetailPage = () => {
  const {slug} = useParams();
  const  {data: game, isLoading, error}         = useGame(slug!); //by adding this exclamation we are typescript that this value can never be undefiened

  if(isLoading) return <Spinner />

  if(error || !game) throw error;

  return (
    <>
      <Heading>
          {game.name}
      </Heading>
      <Text>
        {game.description_raw}  
      </Text>    
    </>
  )
}

export default GameDetailPage