import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import { ColNumber } from "./prop-table";
import { TableCell } from "./table-cell";
import styles from "./prop-table.module.scss";

type TableRowProps = {
  colNumber: ColNumber;
  row: RowType;
};

export type RowType = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue: string;
};

export function TableRow({ row, colNumber }: TableRowProps) {
  return (
    <Grid colMd={colNumber} className={classNames(styles.propRow)}>
      {Object.keys(row).map((title, index) => {
        if (title === "required") return;
        if (title === "name") {
          return (
            <TableCell key={index}>
              <div className={styles.name}>{row[title]}</div>
              {row["required"] && (
                <div className={styles.required}>(Required)</div>
              )}
            </TableCell>
          );
        }
        if (title === "type") {
          return (
            <TableCell key={index}>
              <HighlightedText size={PossibleSizes.xs} key={index}>
                {row[title]}
              </HighlightedText>
            </TableCell>
          );
        }
        return <TableCell key={index}>{row[title]}</TableCell>;
      })}
    </Grid>
  );
}
