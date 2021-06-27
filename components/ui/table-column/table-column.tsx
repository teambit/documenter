import React from "react";
import classNames from "classnames";
import styles from "./table-column.module.scss";

export type TableColumnProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * 
 * a column to be shown in the table
 */
export function TableColumn({ children, className, ...rest }: TableColumnProps) {
  return (
    <div className={classNames(styles.tableColumn, className)} {...rest}>
      {children}
    </div>
  );
}
