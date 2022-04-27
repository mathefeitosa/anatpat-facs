import { Flex, GridItem, Text } from '@chakra-ui/react';

type ContentGridItemProps = {
   imageUrl: string;
   title: string;
};

const ContentGridItem = ({ imageUrl, title }: ContentGridItemProps) => {
   return (
      <GridItem
         as={Flex}
         flexDirection="column"
         alignItems="center"
         width={120}
         height={120}
         backgroundColor="whitesmoke"
         borderRadius={20}
         transition={'ease'}
         transitionDuration="100ms"
         backgroundImage={imageUrl}
         backgroundSize="190px"
         _hover={{
            transform: 'scale(105%)',
            border: '2px solid black',
         }}>
         <Text
            borderRadius={10}
            marginTop="5px"
            padding="2px"
            textAlign="center"
            fontSize="16px"
            maxWidth={150}
            backgroundColor="white">
            {title}
         </Text>
      </GridItem>
   );
};
export default ContentGridItem;
