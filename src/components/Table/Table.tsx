import React from 'react';

import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IIdentifiable } from '../../models/common';

import { ITableProps } from './types';

function Table<T extends IIdentifiable>({ data, columns }: ITableProps<T>) {
  return (
    <TableContainer>
      <MuiTable stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id.toString()} align={column.align} style={{ ...column.cellStyle }}>
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {[data].map((group, groupIndex) => (
            <React.Fragment key={`group-${groupIndex}`}>
              {group.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={`${row.id}-${column.id.toString()}`} align={column.align} style={{ whiteSpace: 'nowrap', ...column.cellStyle }}>
                      {column.Cell ? <column.Cell item={row} /> : column.id && column.id in row && <>{row[column.id as keyof T]}</>}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
