import React from "react";
import classNames from "classnames";
import { Grid } from "@teambit/base-ui-temp.layout.grid-component";
import { ColNumber } from "@bit/bit.test-scope.ui.table/table";
import { HeadingColumn } from "@bit/bit.test-scope.ui.table-heading-column";
import styles from "./table-heading-row.module.scss";

export type HeadingRowProps = {
    headings: string[];
    colNumber: ColNumber;
}

export function HeadingRow({headings, colNumber}: HeadingRowProps) {
  return (
    <Grid col={colNumber} className={classNames(styles.titleRow)}>
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
