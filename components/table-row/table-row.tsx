import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@teambit/base-ui-temp.theme.sizes";
import { Grid } from "@teambit/base-ui-temp.layout.grid-component";
import { HighlightedText } from "@teambit/documenter-temp.ui.highlighted-text";
import { ColNumber } from "@teambit/documenter-temp.ui.table/table";
import { TableColumn } from "@teambit/documenter-temp.ui.table-column";
import styles from "./table-row.module.scss";

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
            <TableColumn key={index}>
              <div className={styles.mobileTitle}>{title}</div>
              <div className={styles.name}>{row[title]}</div>
              {row["required"] && (
                <div className={styles.required}>(Required)</div>
              )}
            </TableColumn>
          );
        }
        if (title === "type") {
          return (
            <TableColumn className={styles.typeColumn} key={index}>
              <div className={styles.mobileTitle}>{title}</div>
              <HighlightedText size={PossibleSizes.xs} key={index} element="p">
                {row[title]}
              </HighlightedText>
            </TableColumn>
          );
        }
        if(title === 'defaultValue') {
          return (
            <TableColumn key={index}>
            <div className={styles.mobileTitle}>{title}</div>
            {row[title] && row[title]?.value}
          </TableColumn>
          )
        }
        return (
          <TableColumn key={index}>
            <div className={styles.mobileTitle}>{title}</div>
            {row[title]}
          </TableColumn>
        );
      })}
    </Grid>
  );
}
