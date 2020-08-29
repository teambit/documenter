import React from "react";
import { HeadingRow } from "@teambit/documenter-temp.ui.table-heading-row";
import { TableRow, RowType } from "@teambit/documenter-temp.ui.table-row";

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
  /**
   * display mobile styles
   */
  isListView?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**
 * A table component that renders the properties of a component.
 */
export function Table({ headings, rows, colNumber, isListView, ...rest }: TableProps) {
  const cols = colNumber || 4;
  return (
    <div {...rest}>
      <HeadingRow
        isListView={isListView}
        colNumber={cols}
        headings={headings}
      />
      {/* TODO - consider adding an id to use as a key instead of index */}
      {rows.map((row: RowType, index: number) => {
        return (
          <TableRow
            key={index}
            isListView={isListView}
            headings={headings}
            row={row}
            colNumber={cols}
          />
        );
      })}
    </div>
  );
}

Table.defaultProps = {
  colNumber: 4,
};
