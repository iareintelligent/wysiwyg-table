import React, { createContext, useContext, useEffect, useState } from 'react';
import { OrNull } from '../custom-types';
import { removeFromLocalStorage } from '../helpers/CustomEditor';

interface ProviderProps {
    children: JSX.Element;
}

export interface TableProviderValues {
    numRows: number;
    setNumRows: (numRows: number) => void;
    numCols: number;
    setNumCols: (numCols: number) => void;
    tableData: string[][];
    setTableData: (tableData: string[][]) => void;
    addRow: () => void;
    addCol: () => void;
    removeRow: () => void;
    removeCol: () => void;
}

export const TableContext = createContext<OrNull<TableProviderValues>>(null);

export const TableProvider = ({ children }: ProviderProps) => {
    const [numRows, setNumRows] = useState<number>((): number => {
        const localRows = localStorage.getItem('numRows');
        return localRows ? parseInt(localRows) : 0;
    });
    const [numCols, setNumCols] = useState(() => {
        const localCols = localStorage.getItem('numCols');
        return localCols ? parseInt(localCols) : 0;
    });

    const myTable = [[''], []] as string[][];
    const [tableData, setTableData] = useState<string[][]>(myTable);
    const addRow = () => {
        setNumRows(numRows + 1);
        const newTableData = tableData;
        newTableData.push([...Array(numCols)].fill(''));
        setTableData(newTableData);
    };

    const addCol = () => {
        setNumCols(numCols + 1);
        const newTableData = tableData;
        newTableData.forEach((row) => {
            row.push('');
        });

        setTableData(newTableData);
    };

    const removeRow = () => {
        if (numRows > 0) {
            const deletedRowNum = numRows - 1;
            for (const colNum of Array.from(Array(numCols).keys())) {
                removeFromLocalStorage([deletedRowNum, colNum]);
            }

            setNumRows(numRows - 1);
            setTableData(tableData.splice(-1, 1));
        }
    };

    const removeCol = () => {
        if (numCols > 0) {
            const deletedColNum = numCols - 1;
            for (const rowNum of Array.from(Array(numRows).keys())) {
                removeFromLocalStorage([rowNum, deletedColNum]);
            }
            setNumCols(numCols - 1);
            setTableData(
                tableData.map((row: string[]) => {
                    return row.splice(-1, 1);
                })
            );
        }
    };

    const table = {
        numRows,
        setNumRows,
        numCols,
        setNumCols,
        tableData,
        setTableData,
        addRow,
        addCol,
        removeRow,
        removeCol,
    };

    return (
        <TableContext.Provider value={{ ...table }}>
            {children}
        </TableContext.Provider>
    );
};

export const useTable = () => {
    const table = useContext(TableContext);

    if (!table) {
        throw new Error('useTable must be used within the TableProvider');
    }

    useEffect(() => {
        localStorage.setItem('numRows', table.numRows.toString());
        localStorage.setItem('numCols', table.numCols.toString());
    }, [table.numRows, table.numCols]);

    return table;
};
