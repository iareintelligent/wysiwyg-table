import { RenderElementProps } from 'slate-react';
import React from 'react';

export const DefaultElement = (props: RenderElementProps) => {
    const style = {
        textAlign: props.element.alignment,
        minWidth: '100px',
        marginTop: 0,
        marginBottom: 0,
    };
    return (
        <p style={style} {...props.attributes}>
            {props.children}
        </p>
    );
};
