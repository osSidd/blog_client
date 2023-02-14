import { Editor } from '@tinymce/tinymce-react';
import useBlogPost from '../hooks/useBlogPost';

export default function TextEditor(){   
  
  const {editorRef} = useBlogPost()
  
  return (
        <div>
            <Editor
              apiKey={import.meta.env.VITE_KEY}
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
              height: 500,
              menubar: true,
              selector:'#body',
              plugins: [
                'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
              ],
              toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
              ,contentStyle: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
          />
          </div>
    )
}

