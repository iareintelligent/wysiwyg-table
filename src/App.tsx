import React from 'react';
import { TableProvider } from './providers/table';
import TableProps from './components/TableProps/TableProps';
import Table from './components/Table/Table';
import { createTheme, ThemeProvider } from '@mui/material';
import { createEditor, Editor } from 'slate';
import { withHistory } from 'slate-history';

function App() {
    const [editor, setEditor] = React.useState<Editor>(
        withHistory(createEditor())
    );

    const theme = createTheme({
        palette: {},
    });
    return (
        <ThemeProvider theme={theme}>
            <TableProvider>
                <TableProps />
                <Table />
            </TableProvider>
        </ThemeProvider>
    );
}

export default App;
