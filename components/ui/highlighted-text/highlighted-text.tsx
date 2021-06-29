import React from 'react';
import classNames from 'classnames';
import { Paragraph, ParagraphProps } from '@teambit/documenter.ui.paragraph';
import styles from './highlighted-text.module.scss';

export type HighlightedTextProps = React.HTMLAttributes<HTMLElement>;

/**
 * A <p> element with text highlighting
 */
export function HighlightedText({
  children,
  className,
  ...rest
}: HighlightedTextProps) {
  return (
    <code {...rest} className={classNames(styles.highlightedText, className)}>
      {children}
    </code>
  );
}
