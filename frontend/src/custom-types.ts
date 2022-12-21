import { ReactEditor } from 'slate-react';
import { BaseEditor, BaseRange, BaseText, Descendant } from 'slate';
import { HistoryEditor } from 'slate-history';

export type CustomEditor = BaseEditor & ReactEditor;

export type BoldText = { text: string; bold?: true };
export type NormalText = { text: string; bold?: false };

export type CustomText = BoldText | NormalText;

export type ParagraphElement = {
    type: 'paragraph';
    children: CustomText[];
};

export interface BaseProps {
    className: string;
    [key: string]: unknown;
}

export type OrNull<T> = T | null;

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor;
        Text: BaseText & {
            placeholder?: string;
            bold?: boolean;
            italic?: boolean;
            underline?: boolean;
        };
        Range: BaseRange & {
            placeholder?: string;
        };
    }
    export interface BaseElement {
        type: string;
        bold?: boolean;
        checked?: boolean;
        children: Descendant[];
        alignment?: 'left' | 'center' | 'right';
    }
    export interface BaseEditor {
        type: string;
    }
}
