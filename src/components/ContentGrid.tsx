import { Flex } from '@chakra-ui/react';
import ContentGridItem from './ContentGridItem';

const ContentGrid = () => {
   return (
      <Flex
         gap={1}
         flexDirection="row"
         flexWrap="wrap"
         alignContent="flex-start"
         w="100%"
         h="100%"
         justifyContent="center"
         padding="10px"
         overflow="auto">
         <ContentGridItem
            imageUrl="DSCN2249+.jpg"
            title="Malucona"></ContentGridItem>
         <ContentGridItem
            imageUrl="neupatger34+.jpg"
            title="Biruta"></ContentGridItem>
         <ContentGridItem
            imageUrl="neupatger42+.jpg"
            title="To fora maluco!"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2255.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2249+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger34+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger42+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2255.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2249+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger34+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger42+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2255.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2249+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger34+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="neupatger42+.jpg"></ContentGridItem>
         <ContentGridItem imageUrl="DSCN2255.jpg"></ContentGridItem>
      </Flex>
   );
};
export default ContentGrid;
