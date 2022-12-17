/* eslint-disable */
// @ts-nocheck
import { Descendant } from 'slate';

export const initialValue: Descendant[] = [
    {
        type: 'table',
        children: [
            {
                type: 'table-row',
                children: [
                    {
                        type: 'table-cell-header',
                        children: [{ text: '' }],
                    },
                ],
            },
        ],
    },
];
