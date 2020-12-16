import React from "react";
import classNames from "classnames";
import styles from "./tr.module.scss";

export type TrProps = {} & React.HTMLAttributes<HTMLTableRowElement>;

export function Tr({ children, className, ...rest }: TrProps) {
  return (
    <tr {...rest} className={classNames(styles.tr, className)}>
      {children}
    </tr>
  );
}
