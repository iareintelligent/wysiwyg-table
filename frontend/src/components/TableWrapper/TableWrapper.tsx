import React, { FC } from 'react';
import './TableWrapper.css';

interface TableWrapperProps {}

const TableWrapper: FC<TableWrapperProps> = () => (
    <div className="TableWrapper" data-testid="TableWrapper">
        TableWrapper Component
    </div>
);

export default TableWrapper;
