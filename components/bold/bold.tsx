import React from "react";
import classNames from "classnames";
import styles from "./bold.module.scss";

export type BoldProps = {} & React.HTMLAttributes<HTMLSpanElement>;

export function Bold({ children, className, ...rest }: BoldProps) {
  return (
    <strong {...rest} className={classNames(styles.bold, className)}>
      {children}
    </strong>
  );
}
