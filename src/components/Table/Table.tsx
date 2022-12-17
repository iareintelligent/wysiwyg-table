import * as React from 'react';
import { useTable } from '../../providers/table';
import WysiwygCell from '../WysiwygCell/WysiwygCell';
import { useState } from 'react';
import { Editor } from 'slate';
import {
    TextAlignment,
    toggleLeafMarkup,
    updateBlockAlignment,
} from '../../helpers/CustomEditor';

const Table: React.FC = () => {
    const { numRows, numCols } = useTable();
    const [cellData] = useState<string>('');
    const [editorRef, setEditorRef] = useState<Editor>();

    return (
        <div>
            <div
                style={{
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ marginRight: '3rem' }}>
                    <button
                        style={{ width: '50px' }}
                        onClick={() => {
                            if (editorRef)
                                updateBlockAlignment(
                                    editorRef,
                                    TextAlignment.left
                                );
                        }}
                    >
                        <span style={{ display: 'flex', minWidth: '100%' }}>
                            <div>&equiv;</div>
                        </span>
                    </button>
                    <button
                        style={{ width: '50px' }}
                        onClick={() => {
                            if (editorRef)
                                updateBlockAlignment(
                                    editorRef,
                                    TextAlignment.center
                                );
                        }}
                    >
                        <span
                            style={{
                                display: 'flex',
                                minWidth: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <div>&equiv;</div>
                        </span>
                    </button>
                    <button
                        style={{ width: '50px' }}
                        onClick={() => {
                            if (editorRef)
                                updateBlockAlignment(
                                    editorRef,
                                    TextAlignment.right
                                );
                        }}
                    >
                        <span
                            style={{
                                display: 'flex',
                                minWidth: '100%',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <div>&equiv;</div>
                        </span>
                    </button>
                </div>
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
                            if (editorRef)
                                toggleLeafMarkup(editorRef, 'italic');
                        }}
                    >
                        <em>I</em>
                    </button>
                    <button
                        onClick={() => {
                            if (editorRef)
                                toggleLeafMarkup(editorRef, 'underline');
                        }}
                    >
                        <span style={{ textDecoration: 'underline' }}>U</span>
                    </button>
                </div>
            </div>

            <table data-testid="wysiwyg-table">
                <tbody>
                    {Array.from(Array(numRows || 0).keys()).map(
                        (rowIndex: number) => (
                            <tr key={rowIndex}>
                                {Array.from(Array(numCols || 0).keys()).map(
                                    (colIndex: number) => (
                                        <td
                                            key={`${rowIndex}${colIndex}`}
                                            style={{
                                                border: '1px solid black',
                                            }}
                                        >
                                            <WysiwygCell
                                                data={cellData}
                                                setEditorRef={setEditorRef}
                                                coords={[rowIndex, colIndex]}
                                            />
                                        </td>
                                    )
                                )}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
