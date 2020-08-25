import React from "react";
import classNames from "classnames";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Grid } from "@teambit/base-ui.layout.grid-component";
import { TableColumn } from "@teambit/documenter-temp.ui.table-column";
import styles from "./table-row.module.scss";

export type DefaultValueProp = {
  value: string;
  computed?: boolean;
  __typename?: string;
};

export type RowType = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: DefaultValueProp;
};

export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // TODO - export Grid ColProps and use here

export type TableRowProps = {
  /**
   * the number of columns to show in the row
   */
  colNumber: ColNumber;
  /**
   * the data to be shown in the row
   */
  row: RowType;
  /**
   * the heading row, by which the row data is ordered
   */
  headings: string[];
  /**
   * display mobile styles
   */
  isListView?: boolean;
};

/**
 *
 * Renders a row in the table according to the order of the headings.
 */
export function TableRow({
  row,
  colNumber = 4,
  headings,
  isListView,
}: TableRowProps) {
  return (
    <Grid
      col={colNumber}
      className={classNames(styles.propRow, {
        [styles.singleColumn]: isListView,
      })}
    >
      {headings.map((title, index) => {
        if (title === "required") return;
        if (title === "name") {
          return (
            <TableColumn key={index}>
              <div
                className={classNames(styles.mobileTitle, {
                  [styles.show]: isListView,
                })}
              >
                {title}
              </div>
              <div className={styles.columnContent}>
                <div className={styles.name}>{row[title]}</div>
                {row["required"] && (
                  <div className={styles.required}>(Required)</div>
                )}
              </div>
            </TableColumn>
          );
        }
        if (title === "type") {
          return (
            <TableColumn className={styles.typeColumn} key={index}>
              <div
                className={classNames(styles.mobileTitle, {
                  [styles.show]: isListView,
                })}
              >
                {title}
              </div>
              <SyntaxHighlighter
                theme={xcode}
                language="javascript"
                className={styles.highlighted}
              >
                {row[title]}
              </SyntaxHighlighter>
            </TableColumn>
          );
        }
        if (title === "defaultValue") {
          return (
            <TableColumn key={index}>
              <div
                className={classNames(styles.mobileTitle, {
                  [styles.show]: isListView,
                })}
              >
                {title}
              </div>
              {row[title] && row[title]?.value}
            </TableColumn>
          );
        }
        if (title === "description") {
          return <TableColumn key={index}>{row[title]}</TableColumn>;
        }
        return (
          <TableColumn key={index}>
            <div
              className={classNames(styles.mobileTitle, {
                [styles.show]: isListView,
              })}
            >
              {title}
            </div>
            {row[title]}
          </TableColumn>
        );
      })}
    </Grid>
  );
}
