import React from 'react';

import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IIdentifiable } from '../../models/common';

import { ITableProps } from './types';
import { groupDataByField } from './utils';

function Table<T extends IIdentifiable>({ data, columns, groupBy, height = 500 }: ITableProps<T>) {
  // If groupBy is provided, transform data into grouped rows
  const groupedData = groupBy ? groupDataByField(data, groupBy) : [data];

  return (
    <TableContainer sx={{ maxHeight: height}}>
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
          {groupedData.map((group, groupIndex) => (
            // Render group header only if there is more than one item in the group
            <React.Fragment key={`group-${groupIndex}`}>
              {groupBy && group.length >= 1 && (
                <TableRow className="group-row">
                  <TableCell colSpan={columns.length}></TableCell>
                </TableRow>
              )}
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
