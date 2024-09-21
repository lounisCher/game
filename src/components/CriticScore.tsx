import {HStack,Badge } from '@chakra-ui/react';


interface Props{
    score: number;
}
const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    
        <Badge fontSize="14px" paddingX="10px" borderRadius="4px"
        colorScheme={color}
        >{score}</Badge>
  
  );
}

export default CriticScore;
