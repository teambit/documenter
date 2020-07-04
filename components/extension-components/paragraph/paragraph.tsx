import React from 'react';
import classNames from 'classnames';
import { Paragraph as BaseParagraph } from "@bit/bit.base-ui.text.paragraph";
import styles from './paragraph.module.scss';

/**
 * a paragraph component
 */
export type ParagraphProps = {
  
} & React.HTMLAttributes<HTMLParagraphElement>;
export function Paragraph({children, className, ...rest}: ParagraphProps) {
  return (
    <BaseParagraph {...rest} className={classNames(styles.paragraph, className)}>
      {children}
    </BaseParagraph>
  );
}
