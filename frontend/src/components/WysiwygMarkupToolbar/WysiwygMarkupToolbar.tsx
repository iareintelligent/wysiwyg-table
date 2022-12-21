import React, { useEffect } from 'react';
import {
    TextAlignment,
    toggleLeafMarkup,
    updateBlockAlignment,
} from '../../helpers/CustomEditor';
import { Editor, Text } from 'slate';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';

interface WysiwygMarkupToolbarProps {
    editorRef: Editor;
}

const WysiwygMarkupToolbar: React.FC<WysiwygMarkupToolbarProps> = ({
    editorRef,
}) => {
    return (
        <Box
            className="WysiwygMarkupToolbar"
            data-testid="WysiwygMarkupToolbar"
            display="flex"
            justifyContent="center"
        >
            <ButtonGroup
                aria-label="text alignment button group"
                role="radiogroup"
                sx={{ mr: 2 }}
            >
                <Button
                    data-testid="bold-markup-button"
                    variant="contained"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '65px',
                        fontWeight: 'bold',
                        marginTop: '1px',
                        marginBottom: '-1px',
                        fontSize: '18px',
                    }}
                    role="radio"
                    aria-label="align left"
                    onClick={() => {
                        if (editorRef)
                            updateBlockAlignment(editorRef, TextAlignment.left);
                    }}
                >
                    <div>&equiv;</div>
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '65px',
                        fontWeight: 'bold',
                        marginTop: '1px',
                        marginBottom: '-1px',
                        fontSize: '18px',
                    }}
                    role="radio"
                    aria-label="align center"
                    onClick={() => {
                        if (editorRef)
                            updateBlockAlignment(
                                editorRef,
                                TextAlignment.center
                            );
                    }}
                >
                    <div>&equiv;</div>
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: '65px',
                        fontWeight: 'bold',
                        marginTop: '1px',
                        marginBottom: '-1px',
                        fontSize: '18px',
                    }}
                    role="radio"
                    aria-label="align right"
                    onClick={() => {
                        if (editorRef)
                            updateBlockAlignment(
                                editorRef,
                                TextAlignment.right
                            );
                    }}
                >
                    <div>&equiv;</div>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (editorRef) toggleLeafMarkup(editorRef, 'bold');
                    }}
                >
                    <span style={{ fontWeight: 'bold' }}>B</span>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (editorRef) toggleLeafMarkup(editorRef, 'italic');
                    }}
                >
                    <em>I</em>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (editorRef) toggleLeafMarkup(editorRef, 'underline');
                    }}
                >
                    <span style={{ textDecoration: 'underline' }}>U</span>
                </Button>
            </ButtonGroup>
            <div></div>
        </Box>
    );
};

export default WysiwygMarkupToolbar;
