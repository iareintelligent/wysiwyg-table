import {RenderElementProps} from "slate-react";
import React from "react";

export const DefaultElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};