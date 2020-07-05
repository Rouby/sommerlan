import {} from 'draft-js';
import draftToHTML from 'draftjs-to-html';
import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface TextEditorProps {
  onChange: (value: string) => void;
}

export function TextEditor({ onChange }: TextEditorProps): React.ReactElement {
  return (
    <div>
      <Editor
        onContentStateChange={(state) => {
          onChange(JSON.stringify(state));
        }}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'emoji',
            'image',
            'remove',
            'history',
          ],
        }}
      />
    </div>
  );
}

export function convertToHTML(state: string) {
  return draftToHTML(JSON.parse(state), undefined, undefined, console.log);
}
