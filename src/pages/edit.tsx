import { Button, Flex, Input, Select } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRef } from 'react';
import ButtonsBar from '../components/ButtonsBar';
import TextEditor from '../components/TextEditor';

const Home: NextPage = () => {
   const editorRef = useRef(null);
   const log = () => {
      if (editorRef.current) {
         console.log(editorRef.current.getContent());
      }
   };
   return (
      <Flex
         width="100vw"
         justifyContent="center"
         alignContent="center"
         height="100vh"
         backgroundColor="white">
         <Flex
            flexDirection="column"
            overflow="hidden"
            height="100%"
            width="100%">
            <Flex
               gap={3}
               flexDirection="column"
               height="100%"
               marginTop="10px"
               justifyContent="center"
               padding="10px">
               <Input placeholder="Título" />
               <Select>
                  <option>Tecido epitelial</option>
                  <option>Tecido conjuntivo</option>
                  <option>Tecido adiposo</option>
                  <option>Tecido cartilaginoso</option>
                  <option>Tecido ósseo</option>
                  <option>Tecido nervoso</option>
                  <option>Tecido muscular</option>
                  <option>Sistema circulatório</option>
                  <option>Hemocitopoese</option>
                  <option>Sistema imunológico</option>
                  <option>Trato digestivo</option>
                  <option>Aparelho respiratório</option>
                  <option>Pele e anexos</option>
                  <option>Aparelho urinário</option>
                  <option>Glândulas endócrinas</option>
                  <option>Aparelho reprodutor masculino</option>
                  <option>Aparelho reprodutor feminino</option>
                  <option>Sistema fotorreceptor</option>
                  <option>Sistema audiorreceptor</option>
               </Select>
               <Select>
                  <option>Hematoxilina-eosina (HE)</option>
                  <option>Eosina</option>
                  <option>Hematoxilina</option>
                  <option>Azul de alcian</option>
                  <option>Impregnação em Prata</option>
                  <option>Tricrômico de Masson</option>
                  <option>Gram</option>
                  <option>Ziehl-Neelsen</option>
                  <option>Giemsa</option>
                  <option>Bielshowsky</option>
                  <option>Cristal violeta</option>
                  <option>Fontana-Masson</option>
                  {/* "https://www.nacientifico.com.br/voce-sabe-escolher-os-metodos-de-coloracao-e-os-corantes-biologico/" */}
               </Select>
               <TextEditor />
               <Button backgroundColor="lightgreen">Salvar</Button>
            </Flex>
            <ButtonsBar />
         </Flex>
      </Flex>
   );
};

export default Home;
