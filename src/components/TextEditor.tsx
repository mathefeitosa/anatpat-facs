import { Flex } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const TextEditor = () => {
   const editorRef = useRef(null);
   const log = () => {
      if (editorRef.current) {
         console.log(editorRef.current.getContent());
      }
   };
   return (
      <Flex
         flexDirection="column"
         width="100%"
         height="100%"
         justifyContent="center"
         alignContent="center"
         backgroundColor="white">
         <Editor
            apiKey="yfbg97n599y990xiji2opoxahhdx67tttexypejyfddjlmhm"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Colque aqui as informações sobre a lâmina</p>"
            init={{
               skin: 'borderless',
               height: '100%',
               width: '100%',
               paste_data_images: true,
               menubar: true,
               plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'preview',
                  'help',
                  'wordcount',
               ],
               toolbar:
                  'undo redo | blocks | ' +
                  'image bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
               content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
         />

         <button onClick={log}>Log editor content</button>
      </Flex>
   );
};

export default TextEditor;
