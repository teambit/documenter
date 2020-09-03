import React from "react";
import classNames from "classnames";
import styles from "./error-page.module.scss";

type ErrorPageProps = {
  /**
   * specifies the type of error that was encountered
   */
  code: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A component that shows an error page according to the error code
 */
export function ErrorPage({ code, className, ...rest }: ErrorPageProps) {
  console.log("code", code);
  return (
    <div {...rest} className={classNames(styles.errorPage, className)}>
      <a href='/'>
        <img
          className={styles.logo}
          src="https://static.bit.dev/bit-logo.svg"
        />
      </a>
      <img
        className={styles.img}
        src={`https://static.bit.dev/harmony/${code}.svg`}
      />
      <div>Try to refresh or use additional support</div>
    </div>
  );
}
