import draftToHTML from 'draftjs-to-html';
import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextEditor({
  value,
  onChange,
}: TextEditorProps): React.ReactElement {
  return (
    <Editor
      initialContentState={value && JSON.parse(value)}
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
  );
}

export function convertToHTML(state: string) {
  return draftToHTML(JSON.parse(state), undefined, undefined, console.log);
}
