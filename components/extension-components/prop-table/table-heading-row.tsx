import React from "react";
import classNames from "classnames";
import { H5 } from "@bit/bit.test-scope.ui.heading";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { ColNumber } from "./prop-table";
import styles from "./prop-table.module.scss";

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
          <H5
            key={index}
            className={classNames(styles.title)}
            size={PossibleSizes.xxs}
          >
            {title}
          </H5>
        );
      })}
    </Grid>
  );
}
