import React from "react";
import classNames from "classnames";
import styles from "./block-quote.module.scss";

export type BlockQuoteProps = {} & React.HTMLAttributes<HTMLQuoteElement>;

export function BlockQuote({ className,children, ...rest }: BlockQuoteProps) {
  return (
    <blockquote {...rest} className={classNames(styles.blockQuote, className)}>
      {children}
    </blockquote>
  );
}
