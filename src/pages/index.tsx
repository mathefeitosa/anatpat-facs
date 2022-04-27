import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ButtonsBar from '../components/ButtonsBar';
import ContentGrid from '../components/ContentGrid';
import Topbar from '../components/Topbar';

const Home: NextPage = () => {
   return (
      <Flex
         width="100vw"
         justifyContent="center"
         alignContent="center"
         height="100vh"
         backgroundColor="white">
         <Flex flexDirection="column" overflow="hidden">
            <Topbar />
            <ContentGrid />
            <ButtonsBar />
         </Flex>
      </Flex>
   );
};

export default Home;
