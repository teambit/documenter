import React from "react";
import classNames from "classnames";
import styles from "./italic.module.scss";

export type ItalicProps = {} & React.HTMLAttributes<HTMLSpanElement>;

export function Italic({ children, className, ...rest }: ItalicProps) {
  return (
    <em {...rest} className={classNames(styles.italic, className)}>
      {children}
    </em>
  );
}
