import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WysiwygAlignmentButtons from './WysiwygAlignmentButtons';

describe('<WysiwygMarkupToolbar />', () => {
    test('it should mount', () => {
        render(
            <WysiwygAlignmentButtons
                onLeftAlignmentClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
                onCenterAlignmentClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
                onRightAlignmentClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );

        const wysiwygMarkupToolbar = screen.getByTestId('WysiwygMarkupToolbar');

        expect(wysiwygMarkupToolbar).toBeInTheDocument();
    });
});
