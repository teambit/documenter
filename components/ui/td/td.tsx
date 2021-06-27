import React from "react";
import classNames from "classnames";
import styles from "./td.module.scss";

export type TdProps = {} & React.HTMLAttributes<HTMLTableDataCellElement>;

export function Td({ children, className, ...rest }: TdProps) {
  return (
    <td {...rest} className={classNames(styles.td, className)}>
      {children}
    </td>
  );
}
