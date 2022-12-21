import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppShell from './AppShell';
import { TableProvider } from '../../providers/table';
import userEvent from '@testing-library/user-event';

describe('<AppShell />', () => {
    it('should mount', () => {
        render(
            <TableProvider>
                <AppShell />
            </TableProvider>
        );

        const myApp = screen.getByTestId('App');
        const muiCode = screen.getByTestId('mui-provided-appshell');

        expect(myApp).toBeInTheDocument();
        expect(muiCode).toBeInTheDocument();
    });

    describe('handleSetNums', () => {
        it('should not allow non-integer input', () => {
            render(
                <TableProvider>
                    <AppShell />
                </TableProvider>
            );

            // Find the input element with the data-testid attribute "numRows"
            const numRowsInput = screen.getAllByTestId('numRowsInput');

            const anyInputWillDo = numRowsInput.at(0);
            const rootInput = anyInputWillDo!.querySelector('input');

            if (anyInputWillDo) {
                // Click on the input element
                userEvent.click(anyInputWillDo);

                // Type the string "abcd" into the input element
                userEvent.type(anyInputWillDo, 'abcd');

                // Assert that the value of the input element is "abcd"
                expect(rootInput!.value).toBe('0');
            }
        });
        it('should not allow values less than zero', () => {
            render(
                <TableProvider>
                    <AppShell />
                </TableProvider>
            );

            // Find the input element with the data-testid attribute "numRows"
            const numRowsInput = screen.getAllByTestId('numRowsInput');

            const anyInputWillDo = numRowsInput.at(0);
            const rootInput = anyInputWillDo!.querySelector('input');

            if (anyInputWillDo) {
                // Click on the input element
                userEvent.click(anyInputWillDo);
                userEvent.type(anyInputWillDo, '5');

                // Assert that the value of the input element isn't negative
                expect(rootInput!.value).toBe('0');
            }
        });
        it('should not allow values more than 25', () => {
            render(
                <TableProvider>
                    <AppShell />
                </TableProvider>
            );

            // Find the input element with the data-testid attribute "numRows"
            const numRowsInput = screen.getAllByTestId('numRowsInput');

            const anyInputWillDo = numRowsInput.at(0);
            const rootInput = anyInputWillDo!.querySelector('input')!;

            if (anyInputWillDo) {
                userEvent.click(anyInputWillDo);

                fireEvent.change(rootInput, { target: { value: '25' } });
                expect(rootInput!.value).toBe('25');
                fireEvent.keyDown(rootInput, {
                    key: 'ArrowUp',
                    code: 'ArrowUp',
                });
                expect(rootInput!.value).toBe('25');
            }
        });
    });
});
