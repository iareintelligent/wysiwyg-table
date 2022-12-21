import {RenderLeafProps} from "slate-react";
import React from "react";

export const Leaf = (props: RenderLeafProps) => {
    return (
        <span
            {...props.attributes}
            style={{fontWeight: props.leaf.bold ? 'bold' : 'normal'}}
        >
            {props.children}
        </span>
    );
};