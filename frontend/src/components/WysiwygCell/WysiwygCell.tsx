import React, { FC, useCallback, useMemo } from 'react';
import './WysiwygCell.css';
import {
    Editable,
    RenderElementProps,
    RenderLeafProps,
    Slate,
    withReact,
} from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor, Editor } from 'slate';
import { Leaf } from '../SlateComponents/Leaf';
import { DefaultElement } from '../SlateComponents/DefaultElement';
import {
    loadFromLocalStorage,
    saveToLocalStorage,
} from '../../helpers/CustomEditor';

interface WysiwygCellProps {
    data: string;
    cellAlignment?: 'left' | 'center' | 'right';
    onSave?: (value: string) => void;
    setEditorRef?: (editor: Editor) => void;
    setMarkupRef?: (editor: Editor) => void;
    coords: number[];
}

const WysiwygCell: FC<WysiwygCellProps> = ({
    data,
    setEditorRef,
    coords,
    setMarkupRef,
}) => {
    const initialValue = loadFromLocalStorage(coords) || [
        {
            type: 'p',
            children: [{ text: data }],
        },
    ];

    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const renderLeaf = useCallback(
        (props: RenderLeafProps) => {
            return <Leaf {...props} />;
        },
        [editor]
    );

    const renderElement = useCallback(
        (props: RenderElementProps) => {
            return <DefaultElement {...props} />;
        },
        [editor]
    );

    return (
        <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => {
                saveToLocalStorage(value, coords);
            }}
        >
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                spellCheck={false}
                onFocus={(event) => {
                    if (setEditorRef) {
                        setEditorRef(editor);
                    }
                }}
            />
        </Slate>
    );
};

export default WysiwygCell;
