import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import { ColNumber } from "../table";
import { TableCell } from "../table-cell";
import styles from "./table-row.module.scss";

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
};

export type DefaultValueProp = {
  value: string;
  computed?: boolean;
  __typename?: string
}

export type RowType = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: DefaultValueProp;
};

/**
 * 
 * Renders a row in the table according to the order of the headings. 
 */
export function TableRow({ row, colNumber = 4, headings }: TableRowProps) {
  return (
    <Grid colMd={colNumber} className={classNames(styles.propRow)}>
      {headings.map((title, index) => {
        if (title === "required") return;
        if (title === "name") {
          return (
            <TableCell key={index}>
              <div className={styles.mobileTitle}>{title}</div>
              <div className={styles.name}>{row[title]}</div>
              {row["required"] && (
                <div className={styles.required}>(Required)</div>
              )}
            </TableCell>
          );
        }
        if (title === "type") {
          return (
            <TableCell className={styles.typeColumn} key={index}>
              <div className={styles.mobileTitle}>{title}</div>
              <HighlightedText size={PossibleSizes.xs} key={index} element="p">
                {row[title]}
              </HighlightedText>
            </TableCell>
          );
        }
        if(title === 'defaultValue') {
          return (
            <TableCell key={index}>
            <div className={styles.mobileTitle}>{title}</div>
            {row[title] && row[title].value}
          </TableCell>
          )
        }
        return (
          <TableCell key={index}>
            <div className={styles.mobileTitle}>{title}</div>
            {row[title]}
          </TableCell>
        );
      })}
    </Grid>
  );
}
