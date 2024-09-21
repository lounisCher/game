import {Button,Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
    return (
        <>
         <Menu>
           <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
             Order by: Revelance
           </MenuButton>
           <MenuList>
             <MenuItem>Revelance</MenuItem>
             <MenuItem>Date Added</MenuItem>
             <MenuItem>zebi</MenuItem>
             <MenuItem>zebi</MenuItem>
             <MenuItem>zebi</MenuItem>
             <MenuItem>zebi</MenuItem>
           </MenuList>
         </Menu>
        </>
     )
}

export default SortSelector
