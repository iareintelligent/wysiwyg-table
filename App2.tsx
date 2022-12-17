
import * as React from 'react';
import { Value, Block } from 'slate';
import { Editor, RenderBlock } from 'slate-react';
import { createTable } from '@/utils/table';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                type: 'table',
                nodes: [
                    {
                        type: 'table_row',
                        nodes: [
                            {
                                type: 'table_cell',
                                nodes: [
                                    {
                                        type: 'paragraph',
                                        nodes: [
                                            {
                                                type: 'text',
                                                leaves: [
                                                    {
                                                        text: 'Column 1, Row 1'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

const Table = (props: { node: Block }) => {
    const columns = props.node.data.get('columns');
    const rows = props.node.data.get('rows');
    const cellWidth = 600 / columns;

    return (
        <table>
            <tbody>
            {props.node.nodes.map((row, i) => (
                <tr key={i}>
                    {row.nodes.map((cell, j) => (
                        <td key={j} style={{ width: `${cellWidth}%` }}>
                            <RenderBlock node={cell} />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const App = () => {
    const [value, setValue] = React.useState(initialValue);
    const editor = React.useMem


