import React from "react";
import classNames from "classnames";
import { H5 } from "@bit/bit.test-scope.ui.heading";
import { TableCellProps } from "./table-cell";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import styles from "./table-cell.module.scss";

export function HeadingCell({ title, className, ...rest }: TableCellProps) {
  return (
    <div className={classNames(styles.headingCell, className)} {...rest}>
      <H5
        className={classNames(styles.title)}
        size={PossibleSizes.xxs}
      >
        {title}
      </H5>
    </div>
  );
}
