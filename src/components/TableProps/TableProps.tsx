import React, { FC } from 'react';
import './TableProps.css';
import { TableProviderValues, useTable } from '../../providers/table';

const TableProps: FC = () => {
    const {
        numRows,
        numCols,
        addRow,
        addCol,
        removeRow,
        removeCol,
    }: TableProviderValues = useTable();

    return (
        <div style={{ width: '100%' }}>
            <div
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <button onClick={removeRow}>Remove Row</button>
                {numRows}
                <button onClick={addRow}>Add Row</button>
            </div>
            <div
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <button onClick={removeCol}>Remove Col</button>
                {numCols}
                <button onClick={addCol}>Add Col</button>
            </div>
        </div>
    );
};

export default TableProps;
