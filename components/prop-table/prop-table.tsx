import React from "react";
import useDimensions from "react-use-dimensions";
import { useDebounce } from "use-debounce";
import { Table } from "@teambit/documenter-temp.ui.table";
import { RowType } from "@teambit/documenter-temp.ui.table-row";

export type TableProps = {
  /**
   * the data to be shown in the table
   */
  rows: RowType[];
  /**
   * resolution to show table in list view
   */
  listViewResolution?: number;
  // & { ref: React.Ref<HTMLDivElement> }
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered.
 * The number of columns is 4 by default.
 */
export function PropTable({ rows, listViewResolution, ...rest }: TableProps) {
  const [ref, { width }] = useDimensions();
  const debouncedSize = useDebounce(width, 300);

  const showListView = +debouncedSize[0] <= listViewResolution;
  
  // TODO - fix the initial render of mobile table
  return (
    <div ref={ref}>
      <Table
        {...rest}
        headings={["name", "type", "defaultValue", "description"]}
        rows={rows}
        isListView={showListView}
      />
    </div>
  );
}

PropTable.defaultProps = {
  listViewResolution: 768,
}
