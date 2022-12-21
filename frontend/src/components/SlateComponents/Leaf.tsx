import { RenderLeafProps } from 'slate-react';
import React from 'react';

export const Leaf = (props: RenderLeafProps) => {
    const { attributes, children, leaf } = props;

    return (
        <span
            data-testid="leaf-element"
            style={{
                fontWeight: leaf.bold ? 'bold' : 'normal',
                fontStyle: leaf.italic ? 'italic' : 'normal',
                textDecoration: leaf.underline ? 'underline' : 'none',
            }}
            {...attributes}
        >
            {children}
        </span>
    );
};
