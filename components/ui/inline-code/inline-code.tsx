import React from 'react';
import classNames from 'classnames';
import styles from './inline-code.module.scss';

export type InlineCodeProps = React.HTMLAttributes<HTMLElement> & {
  /** colors the background with accent color */
  highlight?: boolean;
};

/**
 * A <p> element with text highlighting
 */
export function InlineCode({
  children,
  highlight,
  className,
  ...rest
}: InlineCodeProps) {
  return (
    <code
      {...rest}
      className={classNames(
        styles.inlineCode,
        highlight && styles.highlight,
        className
      )}
    >
      {children}
    </code>
  );
}
