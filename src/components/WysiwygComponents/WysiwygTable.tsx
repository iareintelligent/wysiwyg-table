import React, { FC, useCallback, useState } from 'react';
import './WysiwygTable.css';
import { createEditor, Descendant } from 'slate';
import {
    Editable,
    RenderElementProps,
    RenderLeafProps,
    Slate,
    withReact,
} from 'slate-react';
import { withHistory } from 'slate-history';
import { useTable } from '../../providers/table';
import { Leaf } from './Leaf';
import { DefaultElement } from './DefaultElement';

const WysiwygTable: FC = () => {
    const table = useTable();
    const [editor] = useState(() => withHistory(withReact(createEditor())));

    const slateValue: Descendant[] = useState(
        JSON.parse(
            localStorage.getItem('table') || JSON.stringify(['<div></div>'])
        )
    );

    const renderLeaf = useCallback((props: RenderLeafProps) => {
        return <Leaf {...props} />;
    }, []);

    return (
        <div className="WysiwygCell" data-testid="WysiwygCell">
            {/*<Slate*/}
            {/*    editor={editor}*/}
            {/*    value={table.tableData}*/}
            {/*    onChange={(value) => {*/}
            {/*        localStorage.setItem('tableValue', JSON.stringify(value));*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Toolbar>*/}
            {/*        <MarkupButton format="bold" icon="format_bold" />*/}
            {/*        <MarkupButton format="italic" icon="format_italic" />*/}
            {/*        <MarkupButton format="underline" icon="format_underlined" />*/}
            {/*    </Toolbar>*/}
            {/*    <Editable*/}
            {/*        renderElement={renderElement}*/}
            {/*        renderLeaf={renderLeaf}*/}
            {/*    />*/}
            {/*</Slate>*/}
        </div>
    );
};

export default WysiwygTable;
