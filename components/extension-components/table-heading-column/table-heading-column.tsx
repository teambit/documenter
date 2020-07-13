import React from "react";
import classNames from "classnames";
import { H5 } from "@bit/bit.test-scope.ui.heading";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import styles from "./table-heading-column.module.scss";

export type TableHeadingColumnProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Title heading column for using in the table heading
 */
export function HeadingColumn({ children, className, ...rest }: TableHeadingColumnProps) {

  return (
    <div className={classNames(styles.headingColumn, className)} {...rest}>
      <H5
        className={classNames(styles.title)}
        size={PossibleSizes.xxs}
      >
        {children}
      </H5>
    </div>
  );
}
