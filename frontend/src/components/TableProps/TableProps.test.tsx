import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableProps from './TableProps';

describe('<TableProps />', () => {
    test('it should mount', () => {
        render(<TableProps />);

        const tableProps = screen.getByTestId('TableProps');

        expect(tableProps).toBeInTheDocument();
    });
});
