import React from 'react';
import classNames from 'classnames';
import styles from './inline-code.module.scss';

export type InlineCodeProps = React.HTMLAttributes<HTMLElement>;

/**
 * A <p> element with text highlighting
 */
export function InlineCode({ children, className, ...rest }: InlineCodeProps) {
  return (
    <code {...rest} className={classNames(styles.inlineCode, className)}>
      {children}
    </code>
  );
}
