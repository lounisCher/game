import { Game } from "../hooks/useGame";
import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/imageUrl";

interface Props{
    game: Game,
}

const GameCard = ({ game }: Props) => {
  return (

    <Card>
        <Image src={ getCropedImageUrl(game.background_image)}  />
        <CardBody> 
            <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/> 
            </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>

  )
}

export default GameCard
