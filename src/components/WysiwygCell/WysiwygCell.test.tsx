import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WysiwygCell from './WysiwygCell';

describe('<WysiwygCell />', () => {
    test('it should mount', () => {
        render(
            <WysiwygCell data={''} setEditorRef={jest.fn()} coords={[0, 0]} />
        );

        const wysiwygCell = screen.getByTestId('WysiwygCell');

        expect(wysiwygCell).toBeInTheDocument();
    });
});
