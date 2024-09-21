import {Button,Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platfrom } from '../hooks/useGame';


interface Props{
  onSelectPlatform: (platform: Platfrom)=>void;
  selectedPlatform: Platfrom | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {
  const {data, errors} = usePlatforms();

  if (errors) return null;
  return (
     <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data.map(platform=><MenuItem
          onClick={()=>onSelectPlatform(platform)}
          key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
     </>
  )
}

export default PlatformSelector
