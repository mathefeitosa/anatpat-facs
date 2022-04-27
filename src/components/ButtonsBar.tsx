import { AddIcon, Icon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineHome } from 'react-icons/ai';

const ButtonsBar = () => {
   const router = useRouter();
   const handleNavigation = useCallback((link: string) => {
      router.push(link);
   }, []);

   return (
      <Flex width="100%" height="80px" position="sticky" bottom="0">
         <IconButton
            aria-label="Lâminas"
            width="100%"
            height="100%"
            borderRadius="0"
            _focus={{ outline: 0 }}
            icon={<Icon w={5} h={5} as={AiOutlineHome} />}
            onClick={() => handleNavigation('/')}
         />
         <IconButton width="100%" height="100%" borderRadius="0" />
         <IconButton width="100%" height="100%" borderRadius="0" />
         <IconButton width="100%" height="100%" borderRadius="0" />
         <IconButton
            aria-label="Adicionar nova lâmina"
            width="100%"
            height="100%"
            borderRadius="0"
            _focus={{ outline: 0 }}
            icon={<AddIcon />}
            onClick={() => handleNavigation('/edit')}
         />
      </Flex>
   );
};

export default ButtonsBar;
