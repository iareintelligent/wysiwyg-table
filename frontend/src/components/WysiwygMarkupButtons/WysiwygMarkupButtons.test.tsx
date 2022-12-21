import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WysiwygMarkupButtons from './WysiwygMarkupButtons';
import { Editor } from 'slate';

describe('<WysiwygMarkupButtons />', () => {
    test('it should mount', () => {
        render(<WysiwygMarkupButtons editorRef={{} as Editor} />);

        const wysiwygMarkupButtons = screen.getByTestId('WysiwygMarkupButtons');

        expect(wysiwygMarkupButtons).toBeInTheDocument();
    });
});
