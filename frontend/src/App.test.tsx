import React from 'react';
import { render, screen } from '@testing-library/react';
import AppShell from './components/AppShell/AppShell';
import { TableProvider } from './providers/table';

test('renders learn react link', () => {
    render(
        <TableProvider>
            <AppShell />
        </TableProvider>
    );
    const appShell = screen.getByTestId('Shell');
    expect(appShell).toBeInTheDocument();
});
