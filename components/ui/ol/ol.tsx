import React from "react";
import classNames from "classnames";
import styles from "./ol.module.scss";

export type OlProps = {} & React.HTMLAttributes<HTMLOListElement>;

export function Ol({ children, className, ...rest }: OlProps) {
  return (
    <ol {...rest} className={classNames(styles.ol, className)}>
      {children}
    </ol>
  );
}
