import useGenres from "../hooks/useGenres"
import {List, ListItem, HStack, Image, Spinner, Button, Heading} from '@chakra-ui/react';
import getCropedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";



const GenreList = () => {
    const {data, isLoading, error} = useGenres();

    const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s=>s.setGenreId)


    if(error) return null;
    if(isLoading) return <Spinner/>
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
        <List>
            {data?.results.map(genre=>
            <ListItem key={genre.id} paddingY={2}>
                <HStack>
                <Image src={getCropedImageUrl(genre.image_background)} objectFit={"cover"} boxSize="32px" borderRadius="8px"/>
                 <Button whiteSpace={"normal"} textAlign="left" onClick={()=>setSelectedGenreId(genre.id)} variant='link'
                  fontWeight={genre.id===selectedGenreId?"bold":"normal"}>
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
