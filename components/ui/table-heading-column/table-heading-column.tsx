import React from "react";
import classNames from "classnames";
import styles from "./table-heading-column.module.scss";

export type TableHeadingColumnProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Title heading column for using in the table heading
 */
export function HeadingColumn({ children, className, ...rest }: TableHeadingColumnProps) {

  return (
    <div className={classNames(styles.headingColumn, className)} {...rest}>
      <div
        className={classNames(styles.title)}
      >
        {children}
      </div>
    </div>
  );
}