import useGame from '../hooks/useGame';
import {Text, SimpleGrid, Box, Spinner} from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';



const GameGrid = () => {



    const {data, error, isLoading, fetchNextPage, hasNextPage}=useGame();
    const skeletons = [1,2,3,4,5,6];

    if(error) return <Text>{error.message}</Text>

    const fetchedGamesCount = data?.pages.reduce((acc, page)=> acc+page.results.length, 0 ) || 0;
  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={()=>fetchNextPage()}
        loader={<Spinner/>}
      >
        <SimpleGrid columns={{sm: 1, md:2, lg:3, xl:3}} spacing={6} >
          {isLoading && skeletons.map((skeleton)=>
          <GameCardContainer  key={skeleton} >
          <GameCardSkeleton/>
          </GameCardContainer>
        )} 

          {data?.pages.map((page, index)=><React.Fragment key={index}>
            {page.results.map(game=>
              <GameCardContainer key={game.id}>
              <GameCard game={game}/>
            </GameCardContainer> 
            )}
          </React.Fragment>)}
        </SimpleGrid>  
        </InfiniteScroll>
        </Box>
  )
}

export default GameGrid
