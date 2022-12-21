import React from 'react';
import {
    act,
    fireEvent,
    getByTestId,
    render,
    screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WysiwygMarkupToolbar from './WysiwygMarkupToolbar';
import { createEditor, Editor } from 'slate';
import { TableProvider } from '../../providers/table';
import AppShell from '../AppShell/AppShell';
import userEvent from '@testing-library/user-event';
import { withReact } from 'slate-react';
import WysiwygCell from '../WysiwygCell/WysiwygCell';

describe('<WysiwygMarkupToolbar />', () => {
    it('should mount', () => {
        render(<WysiwygMarkupToolbar editorRef={{} as Editor} />);

        const wysiwygMarkupToolbar = screen.getByTestId('WysiwygMarkupToolbar');

        expect(wysiwygMarkupToolbar).toBeInTheDocument();
    });

    describe('marking up wysiwyg text in a table cell', () => {
        describe('markup toggle', () => {
            it("should render selected text bold if it is not already bold'", () => {
                jest.mock('slate', () => ({
                    Editor: jest.fn().mockImplementation(() => {
                        return {
                            addMark: jest.fn(),
                            removeMark: jest.fn(),
                        };
                    }),
                    createEditor: () => {
                        return {
                            marks: {
                                bold: false,
                                italic: false,
                                underlined: false,
                            } as Partial<Omit<Text, 'text'>>,
                        };
                    },
                }));

                const editor = createEditor();

                render(
                    <>
                        <WysiwygMarkupToolbar editorRef={editor} />
                        <WysiwygCell data={'test'} coords={[0, 0]} />
                    </>
                );

                const leafText = screen.getByText('test');
                fireEvent.dblClick(leafText);

                const boldButton = screen.getByTestId('bold-markup-button');

                fireEvent.click(boldButton);
                const leafElement = screen.getByTestId('leaf-element');
                expect(leafElement.getAttribute('style')).toContain('bold');
            });
            it('should render selected text regular if it is already bold', () => {
                // ...
            });
        });
        describe('multiple markups', () => {
            it('should render selected text bold and italic and underlined if both buttons are pressed', () => {
                // ...
            });
        });
    });
});
