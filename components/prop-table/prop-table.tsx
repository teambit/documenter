import React from "react";
import { Table } from "@teambit/documenter-temp.ui.table";
import { RowType } from "@teambit/documenter-temp.ui.table-row";

export type TableProps = {
  /**
   * the data to be shown in the table
   */
  rows: RowType[];
};

/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered.
 * The number of columns is 4 by default.
 */
export function PropTable({ rows }: TableProps) {
  return (
    <Table
      headings={["name", "type", "defaultValue", "description"]}
      rows={rows}
    />
  );
}
