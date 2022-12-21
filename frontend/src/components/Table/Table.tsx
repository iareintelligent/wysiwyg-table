import * as React from 'react';
import { useMemo, useState } from 'react';
import { useTable } from '../../providers/table';
import WysiwygCell from '../WysiwygCell/WysiwygCell';
import { createEditor, Editor } from 'slate';
import WysiwygMarkupToolbar from '../WysiwygMarkupToolbar/WysiwygMarkupToolbar';
import { Button, Fab, Paper, SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import { Add, Delete } from '@mui/icons-material';

const Table: React.FC = () => {
    const { numRows, numCols, addCol, addRow, removeCol, removeRow } =
        useTable();
    const [cellData] = useState<string>('');
    const [editorRef, setEditorRef] = useState<Editor>(createEditor);

    const deleteColFabStyle = {
        fontSize: 12,
        position: 'absolute',
        bottom: '-3rem',
        right: 10,
    };
    const addRowFabStyle = {
        fontSize: 12,
        position: 'absolute',
        bottom: '-3rem',
        left: 0,
        width: numCols < 2 ? '100px' : numCols < 3 ? '125px' : '72%',
    };

    const deleteRowFabStyle = {
        fontSize: 12,
        position: 'absolute',
        right: '-5.5rem',
        bottom: 0,
    };
    const addColFabStyle = {
        fontSize: 12,
        position: 'absolute',
        right: '-5.5rem',
        height: '70%',
        minHeight: '33px',
        top: 0,
    };

    const fabs = useMemo(() => {
        return [
            {
                color: 'primary' as const,
                sx: addColFabStyle as SxProps,
                icon: <Add />,
                label: 'Col',
                onClick: () => addCol(),
            },
            {
                color: 'primary' as const,
                sx:
                    numRows > 1
                        ? (deleteRowFabStyle as SxProps)
                        : { display: 'none' },
                icon: <Delete />,
                label: ' Row',
                onClick: () => removeRow(),
            },
            {
                color: 'primary' as const,
                sx: addRowFabStyle as SxProps,
                icon: <Add />,
                label: ' Row',
                onClick: () => addRow(),
            },
            {
                color: 'primary' as const,
                sx:
                    numCols > 1
                        ? (deleteColFabStyle as SxProps)
                        : { display: 'none' },
                icon: <Delete />,
                label: 'Col',
                onClick: () => removeCol(),
            },
        ];
    }, [numRows, numCols]);

    function fixTable() {
        if (numRows < 1) addRow();
        if (numCols < 1) addCol();
    }

    return (
        <Box maxWidth="100%">
            {numCols > 0 && numRows > 0 && (
                <WysiwygMarkupToolbar editorRef={editorRef} />
            )}
            <Box display="flex" py={10} overflow="auto" position="relative">
                {(numRows > 0 && numCols > 0 && (
                    <Paper
                        component={Box}
                        position="relative"
                        data-testid="wysiwyg-table"
                    >
                        {fabs.map((fab, index) => (
                            <Fab
                                key={index}
                                sx={fab.sx}
                                aria-label={fab.label}
                                color={fab.color}
                                size="small"
                                onClick={fab.onClick}
                                variant="extended"
                            >
                                {fab.icon} &nbsp;
                                {fab.label}
                            </Fab>
                        ))}
                        <table>
                            <tbody>
                                {Array.from(Array(numRows || 0).keys()).map(
                                    (rowIndex: number) => (
                                        <tr key={rowIndex}>
                                            {Array.from(
                                                Array(numCols || 0).keys()
                                            ).map((colIndex: number) => (
                                                <td
                                                    key={`${rowIndex}${colIndex}`}
                                                    style={{
                                                        border: '1px solid black',
                                                    }}
                                                >
                                                    <WysiwygCell
                                                        data={cellData}
                                                        setEditorRef={
                                                            setEditorRef
                                                        }
                                                        coords={[
                                                            rowIndex,
                                                            colIndex,
                                                        ]}
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </Paper>
                )) || (
                    <Button
                        size="large"
                        onClick={() => {
                            fixTable();
                        }}
                    >
                        Create Table
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Table;
