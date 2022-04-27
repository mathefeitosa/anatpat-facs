import {
   Box,
   Flex,
   Icon,
   Input,
   InputGroup,
   InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Topbar = () => {
   return (
      <Flex
         backgroundColor="#ffffff0"
         width="100%"
         height="70px"
         justifyContent="center"
         alignItems="center"
         position="sticky"
         top="0"
         zIndex="100"
         paddingX={4}>
         <Box width="100%">
            <InputGroup variant="outline">
               <InputRightElement children={<Icon as={BsSearch} />} />
               <Input
                  type="text"
                  placeholder="pesquisar..."
                  _focus={{ outline: 'none' }}></Input>
            </InputGroup>
         </Box>
      </Flex>
   );
};

export default Topbar;
