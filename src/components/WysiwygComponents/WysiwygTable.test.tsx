import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WysiwygTable from './WysiwygTable';

describe('<WysiwygComponents />', () => {
    it('should mount', () => {
        render(<WysiwygTable />);

        const wysiwygTable = screen.getByTestId('WysiwygTable');

        expect(wysiwygTable).toBeInTheDocument();
    });

    describe('<TableToolbar />', () => {
        it('should render', () => {
            render(<WysiwygTable />);

            const toolbar = screen.getByTestId('TableToolbar');

            expect(toolbar).toBeInTheDocument();
        });
    });
});
