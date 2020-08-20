import React from "react";
import classNames from "classnames";
import { H5 } from "@teambit/documenter-temp.ui.heading";
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
        size="xxs"
      >
        {children}
      </H5>
    </div>
  );
}
