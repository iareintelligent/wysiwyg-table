import {
    Descendant,
    Editor,
    Element,
    ElementInterface,
    Node,
    Point,
    Transforms,
} from 'slate';

export enum TextAlignment {
    'left' = 'left',
    'center' = 'center',
    'right' = 'right',
}

export function isLeafMarkupActive(editor: Editor, format: string): boolean {
    const markups = Object.entries(Editor.marks(editor) || {});
    const matches = markups.some(
        (value) => value[0] === format && value[1] === true
    );
    return matches;
}

export function toggleLeafMarkup(editor: Editor, format: string): void {
    const isActive = isLeafMarkupActive(editor, format);
    isActive ? editor.removeMark(format) : editor.addMark(format, true);
}

export function updateBlockAlignment(
    editor: Editor,
    alignment: TextAlignment
): void {
    Transforms.setNodes(editor, {
        alignment,
    });
}

export function saveToLocalStorage(value: Descendant[], coords: number[]) {
    localStorage.setItem(`${coords.join(',')}`, JSON.stringify(value));
}

//written w/ chatgpt help
export function loadFromLocalStorage(
    coords: number[]
): Descendant[] | undefined {
    const editorString = localStorage.getItem(`${coords.join(',')}`);
    if (editorString) {
        return JSON.parse(editorString) as Descendant[];
    }
    return undefined;
}
