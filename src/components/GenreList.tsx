import useGenres from "../hooks/useGenres"
import {List, ListItem, HStack, Image, Text, Spinner} from '@chakra-ui/react';
import getCropedImageUrl from "../services/imageUrl";

const GenreList = () => {
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
                <Text>{genre.name}</Text>
                </HStack>
            </ListItem>
        )}
        </List>
    </>
  )
}

export default GenreList
