import useGenres, { Genre } from "../hooks/useGenres"
import {List, ListItem, HStack, Image, Spinner, Button} from '@chakra-ui/react';
import getCropedImageUrl from "../services/imageUrl";

interface Props{
  onSelectGenre: (genre: Genre)=>void;
}

const GenreList = ({onSelectGenre}:Props) => {
    const {data, isLoading, errors} = useGenres();
    if(errors) return null;
    if(isLoading) return <Spinner/>
  return (
    <>
        <List>
            {data.map(genre=>
            <ListItem key={genre.id} paddingY={2}>
                <HStack>
                <Image src={getCropedImageUrl(genre.image_background)} boxSize="32px" borderRadius="8px"/>
                 <Button onClick={()=>onSelectGenre(genre)} variant='link'>
                  {genre.name}
                  </Button>
                </HStack>
            </ListItem>
        )}
        </List>
    </>
  )
}

export default GenreList
