import React from "react";
import { HeadingRow } from "./table-heading-row";
import { TableRow, RowType } from "./table-row";

export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // TODO - export Grid ColProps and use here

export type TableProps = {
  headings: string[];
  rows: RowType[];
  colNumber?: ColNumber; // TODO - export Grid ColProps and use here
};

export function PropTable({ headings, rows, colNumber }: TableProps) {
  const cols = colNumber || 4;
  return (
    <div>
      <HeadingRow colNumber={cols} headings={headings} />
      {/* TODO - consider adding an id to use as a key instead of index */}
      {rows.map((row: RowType, index: number) => {
        return <TableRow key={index} row={row} colNumber={cols} />;
      })}
    </div>
  );
}


