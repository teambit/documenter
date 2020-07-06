import React from "react";
import { HeadingRow } from "./table-heading-row";
import { TableRow, RowType } from "./table-row";

export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // TODO - export Grid ColProps and use here

export type TableProps = {
  /**
   * the heading row, by which the table data is ordered 
   */
  headings: string[];
  /**
   * the data to be shown in the table
   */
  rows: RowType[];
  /**
   * the number of columns to show in the table
   */
  colNumber?: ColNumber; // TODO - export Grid ColProps and use here
};

/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered. 
 * The number of columns is 4 by default.
 */
export function PropTable({ headings, rows, colNumber }: TableProps) {
  const cols = colNumber || 4;
  return (
    <div>
      <HeadingRow colNumber={cols} headings={headings} />
      {/* TODO - consider adding an id to use as a key instead of index */}
      {rows.map((row: RowType, index: number) => {
        return <TableRow key={index} headings={headings} row={row} colNumber={cols} />;
      })}
    </div>
  );
}

PropTable.defaultProps = {
  colNumber: 4
}