import React from "react";
import classNames from "classnames";
import { Grid } from "@teambit/base-ui.layout.grid-component";
import { ColNumber } from "@teambit/documenter-temp.ui.table";
import { HeadingColumn } from "@teambit/documenter-temp.ui.table-heading-column";
import styles from "./table-heading-row.module.scss";

export type HeadingRowProps = {
  /**
   * array of strings to be displayed in the title row
   */
  headings: string[];
  /**
   * number of columns in the row
   */
  colNumber: ColNumber;
  /**
   * display mobile styles
   */
  isListView?: boolean;
};

export function HeadingRow({
  headings,
  colNumber,
  isListView = false,
}: HeadingRowProps) {
  return (
    <Grid
      col={colNumber}
      className={classNames(styles.titleRow, { [styles.hide]: isListView })}
    >
      {headings.map((title: string, index: number) => {
        if (title === "required") return;
        return (
          <HeadingColumn key={index} className={styles.titleCol}>
            {title}
          </HeadingColumn>
        );
      })}
    </Grid>
  );
}
