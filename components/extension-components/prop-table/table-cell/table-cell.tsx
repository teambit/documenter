import React from "react";
import classNames from "classnames";
import styles from "./table-cell.module.scss";

export type TableCellProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function TableCell({ children, className, ...rest }: TableCellProps) {
  return (
    <div className={classNames(styles.tableCell, className)} {...rest}>
      {children}
    </div>
  );
}
