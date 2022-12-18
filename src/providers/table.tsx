import React, { createContext, useContext, useEffect, useState } from 'react';
import { OrNull } from '../custom-types';

interface ProviderProps {
    children: JSX.Element;
}

export interface TableProviderValues {
    numRows: number;
    numCols: number;
    tableData: string[][];
    setTableData: (tableData: string[][]) => void;
    addRow: () => void;
    addCol: () => void;
    removeRow: () => void;
    removeCol: () => void;
}

export const TableContext = createContext<OrNull<TableProviderValues>>(null);

export const TableProvider = ({ children }: ProviderProps) => {
    const [numRows, setNumRows] = useState(1);
    const [numCols, setNumCols] = useState(1);

    const myTable = [
        ['', ''],
        ['', ''],
    ] as string[][];
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
            setNumRows(numRows - 1);
            setTableData(tableData.splice(-1, 1));
        }
    };

    const removeCol = () => {
        if (numCols > 0) {
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
        numCols,
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

    return table;
};
