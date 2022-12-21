import React, { FC } from 'react';
import './WysiwygMarkupButtons.css';
import { toggleLeafMarkup } from '../../helpers/CustomEditor';
import { Editor } from 'slate';

interface WysiwygMarkupButtonsProps {
    editorRef: Editor;
}

const WysiwygMarkupButtons: FC<WysiwygMarkupButtonsProps> = ({ editorRef }) => (
    <div>
        <button
            onClick={() => {
                if (editorRef) toggleLeafMarkup(editorRef, 'bold');
            }}
        >
            <span style={{ fontWeight: 'bold' }}>B</span>
        </button>
        <button
            onClick={() => {
                if (editorRef) toggleLeafMarkup(editorRef, 'italic');
            }}
        >
            <em>I</em>
        </button>
        <button
            onClick={() => {
                if (editorRef) toggleLeafMarkup(editorRef, 'underline');
            }}
        >
            <span style={{ textDecoration: 'underline' }}>U</span>
        </button>
    </div>
);

export default WysiwygMarkupButtons;
