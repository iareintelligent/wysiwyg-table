import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableWrapper from './TableWrapper';

describe('<TableWrapper />', () => {
    test('it should mount', () => {
        render(<TableWrapper />);

        const tableWrapper = screen.getByTestId('TableWrapper');

        expect(tableWrapper).toBeInTheDocument();
    });
});
